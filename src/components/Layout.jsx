import React from "react";

function Layout(props) {
    return (
        <>
        <div style={{
            margin: "auto",
            maxWidth: "1200px",
            minWidth: "800px",
        }}>
            <header
                style={{
                    padding:"20px",
                    border: "1px solid black"
                }}
            >   
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>My TodoList</div>
                <div>React</div>
            </div>
            </header>
            <div style={{
                border: "1px solid red"
            }}>
            {props.children}
            </div>
        </div>
        
        </>
    );
}

export default Layout;
