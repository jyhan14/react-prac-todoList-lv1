import React from "react";
import './Layout.css';

function Layout(props) {
    return (
        <>
        <div className="layout">
            <div className="header">   
                <div>My TodoList</div>
                <div>React</div>
            </div>
            <div className="todoForm" style={{
                border: "1px solid red"
            }}>
            {props.children}
            </div>
        </div>
        
        </>
    );
}

export default Layout;
