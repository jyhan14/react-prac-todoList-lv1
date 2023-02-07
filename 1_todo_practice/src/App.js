import { useState } from "react";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "삭제기능 구현하기",
            body: "2/7일까지 완료해야합니다.",
            isDone: false,
        },

        {
            id: 2,
            title: "추가기능 구현하기",
            body: "2월 6일까지 완료해야합니다.",
            isDone: true,
        },
    ]);

    return (
        <div>
            <Layout>
                <TodoForm todos={todos} setTodos={setTodos} />
                <TodoItems todos={todos} setTodos={setTodos} />
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

const TodoForm = ({ todos, setTodos }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const bodyChangeHandler = (e) => {
        setBody(e.target.value);
    };

    const addTodos = (e) => {
        e.preventDefault();

        const newTodos = {
            id: todos.length + 1,
            title,
            body,
            isDone: false,
        };

        //원래있던 todos를 스프레드연산자로 풀어주고, 거기서 newTodos를 다시 넣은 것!
        setTodos([...todos, newTodos]);
    };
    return (
        <form className="todoForm" onSubmit={addTodos}>
            <div className="inputs">
                <label>제목 : </label>
                <input
                    type="text"
                    value={title}
                    onChange={titleChangeHandler}
                />
                <label>내용 : </label>
                <input type="text" value={body} onChange={bodyChangeHandler} />
            </div>
            <button>추가하기</button>
        </form>
    );
};

const TodoItems = ({ todos, setTodos }) => {
    return (
        <div className="todoItems">
            <h2 className="title">Working</h2>
            <div className="itemsWrapper">
                {todos.map(function (todo) {
                    if (!todo.isDone) {
                        return (
                            <Todo
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}
                                todo={todo}
                            />
                        );
                    }
                })}
            </div>
            <h2 className="title">Done</h2>
            <div className="itemsWrapper">
                {todos.map(function (todo) {
                    if (todo.isDone) {
                        return (
                            <Todo
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}
                                todo={todo}
                            />
                        );
                    } else return null;
                })}
            </div>
        </div>
    );
};

const Todo = ({ todo }) => {
    return (
        <div className="todoContainer">
            <div>
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
            </div>

            <div className="btns">
                <button>삭제</button>
                <button>{todo.isDone ? "취소" : "완료"}</button>
            </div>
        </div>
    );
};

export default App;
