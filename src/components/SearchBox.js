import React from "react";

const SearchBox = (props) => {
    return(
        <div>
            <input
                className="pa2 mb3 ba b--green bg-lightest-blue" 
                type="text" 
                placeholder="Search Robot"
                onChange = {props.searchChange}    
                />
                
        </div>
    );
}

export default SearchBox;