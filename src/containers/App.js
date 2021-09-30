import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ScrollBox from "../components/ScrollBox";
import Error from "../components/Error";
import "./App.css";

class App extends React.Component {
    constructor() {
        console.log("constructor");
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    // functionName = (...) => {}
    // use this syntax for custom functions to avoid errors while using 'this' within the functions
    onSearchChange = (event) => {
        // console.log(event.target.value);
        
        // set new state from search text
        this.setState({searchField: event.target.value});
    }
    
    // react component lifecycle
    // https://reactjs.org/docs/react-component.html#mounting
    componentDidMount() {
        console.log("componentDidMount");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    // filter robots based on value in search field
    render () {
        console.log("render");

        const { robots, searchField } = this.state;

        const filteredRobots = this.state.robots.filter(
            robot => robot.name
                .toLowerCase()
                .includes(searchField.toLowerCase())
        );   

        if(robots.length == 0){
            // inform user
            return (
                <div>
                    <h1 className="tc">loading...</h1>
                </div>
            )
        } else {
            // article on map(), reduce(), filter()
            // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
            return (
                <div className="tc">
                    <h1 className="mb3">Robofriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <ScrollBox>
                        <Error>
                             <CardList robots = {filteredRobots} />
                        </Error>
                    </ScrollBox>
                    
                </div>
            );
        }
    }
}

export default App;