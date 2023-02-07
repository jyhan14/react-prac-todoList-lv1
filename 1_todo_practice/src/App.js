import "./App.css";

function App() {
    return (
        <div>
            <Layout>
              <TodoForm />
              <TodoItems />
            </Layout>
        </div>
    );
}

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

const TodoForm = () => {
    return (
        <form className="todoForm">
            <div className="inputs">
                <label>제목 : </label>
                <input
                    type="text"/>
                <label>내용 : </label>
                <input
                    type="text"/>
            </div>

            <button>추가하기</button>
        </form>
    );
};

const TodoItems = () => {
  return (
    <div className="todoItems">
            <h2 className="title">Working</h2>
            <div className="itemsWrapper">
                    
            </div>
            <h2 className="title">Done</h2>
            <div className="itemsWrapper">

            </div>
        </div>
  );
}

export default App;
