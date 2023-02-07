import React from "react";
import './layout.css';

const Layout = (props) => {
    return (
        <>
            <div className="layout">
                <div className="header">
                    <div>My TodoList</div>
                    <div>React</div>
                </div>
                <div
                    style={{
                        border: "1px solid red",
                    }}
                ></div>
            </div>
            {props.children}
        </>
    );
};

export default Layout;
