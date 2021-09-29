import React from "react";

class SearchBox extends React.Component {
    render() {
        return(
            <div>
                <input
                    className="pa2 mb3 ba b--green bg-lightest-blue" 
                    type="text" 
                    placeholder="Search Robot"
                    onChange = {this.props.searchChange}    
                    />
                    
            </div>
        );
    }
}

export default SearchBox;