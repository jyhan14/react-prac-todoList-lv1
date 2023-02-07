import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([{
    id: 1, 
    title: "삭제기능 구현하기", 
    body: "2/7일까지 완료해야합니다.", 
    isDone: false},

    {id: 2, 
    title: "추가기능 구현하기", 
    body: "2월 6일까지 완료해야합니다.", 
    isDone: true}
  ]);

    return (
        <div>
            <Layout>
                <TodoForm todos={todos} setTodos={setTodos}/>
                <TodoItems todos={todos} setTodos={setTodos}/>
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

const TodoForm = ({todos, setTodos}) => {
    return (
        <form className="todoForm">
            <div className="inputs">
                <label>제목 : </label>
                <input type="text" />
                <label>내용 : </label>
                <input type="text" />
            </div>

            <button>추가하기</button>
        </form>
    );
};

const TodoItems = ({todos, setTodos}) => {
    return (
        <div className="todoItems">
            <h2 className="title">Working</h2>
            <div className="itemsWrapper">
                <div className="todoContainer">
                    <div>
                        <h2>{todos[0].title}</h2>
                        <div>{todos[0].body}</div>
                    </div>

                    <div className="btns">
                        <button>삭제</button>
                        <button>취소 or 완료</button>
                    </div>
                </div>
            </div>
            <h2 className="title">Done</h2>
            <div className="itemsWrapper">
                <div className="todoContainer">
                    <div>
                        <h2>{todos[1].title}</h2>
                        <div>{todos[1].body}</div>
                    </div>

                    <div className="btns">
                        <button>삭제</button>
                        <button>취소 or 완료</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
