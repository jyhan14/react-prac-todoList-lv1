import React from "react";

function Layout(props) {
    return (
        <>
        <header
            style={{
                margin: "10px",
                border: "1px solid red",
                maxWidth: "1200px",
                minWidth: "800px",
            }}
        >   
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div>My TodoList</div>
            <div>React</div>
        </div>
        </header>
        {props.children}
        </>
    );
}

export default Layout;
