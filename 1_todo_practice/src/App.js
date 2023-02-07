import "./App.css";

function App() {
    return (
        <div>
            <Layout></Layout>
        </div>
    );
}

const Layout = () => {
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
        </>
    );
};

export default App;
