import React from "react";
import './todo.css';

function Todo({todo, setTodos}) {
    return (
        <div className="todoContainer">
            <div>  
                <h2>{todo.title}</h2>
                <div>{todo.body}</div>
            </div>

            <div className="btns">
                <button>
                    삭제
                </button>
                <button>
                    {todo.isDone ? "취소" : "완료"}
                </button>
            </div>
        </div>
        
    );
}

export default Todo;
