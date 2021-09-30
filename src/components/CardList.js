import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((robot, index) => {
                    return (
                        <Card 
                            key={robot.id}
                            name={robot.name}
                            username={robot.username}
                            id={robot.id}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;