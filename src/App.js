import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
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
    
    render () {
        // filter robots based on value in search field
        
        // article on map(), reduce(), filter()
        // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

        const filteredRobots = this.state.robots.filter(
            robot => robot.name
                .toLowerCase()
                .includes(this.state.searchField.toLowerCase())
        );

        return (
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {filteredRobots} />
            </div>
        );
    }
}

export default App;