import React from "react";

const ScrollBox = (props) => {
    return (
        <div style = {{overflowY: 'scroll', 
            border:'2px solid #0ccac4', 
            maxWidth:'wrap-content', 
            height:'400px',
            padding: '1rem'}}>
            {props.children}
        </div>
    );
}

export default ScrollBox;