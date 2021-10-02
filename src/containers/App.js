import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ScrollBox from "../components/ScrollBox";
import Error from "../components/Error";
import "./App.css";

function App() {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    
    const onSearchChange = (event) => {
        //this.setState({searchField: event.target.value});
        setSearchField(event.target.value); //using hooks
    }
    
    // useEffect() is called every time the variables in optional parameter change
    // all variables should be inside an array
    // mimics componentDidMount() when optional parameter is '[]' 
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);


    //console.log(searchField);
    const filteredRobots = robots.filter(
        robot => robot.name
            .toLowerCase()
            .includes(searchField.toLowerCase())
    );  

    // filter robots based on value in search field
    if(robots.length === 0){
        // inform user
        return (
            <div>
                <h1 className="tc">loading...</h1>
            </div>
        );
    }
    else {
        // article on map(), reduce(), filter()
        // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
        return (
            <div className="tc">
                <h1 className="mb3">Robofriends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <ScrollBox>
                    <Error>
                         <CardList robots = {filteredRobots} />
                    </Error>
                </ScrollBox>
            </div>
        );
    }
}

export default App;