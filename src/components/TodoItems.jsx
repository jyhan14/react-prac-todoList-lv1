import React from "react";
import './todoItems.css';

const TodoItems = () => {
    return(
        <div className="todoItems">
            <h2 className="title">Working</h2>
            <div className="itemsWrapper">
                <div className="todoContainer">

                </div>
            </div>
            <h2 className="title">Done</h2>
            <div className="itemsWrapper">
                <div className="todoContainer">
                    
                </div>
            </div>
        </div>
    );
};

export default TodoItems;