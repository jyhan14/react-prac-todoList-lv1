import React from "react";
import "./todoItems.css";
import Todo from "../todo/Todo";

const TodoItems = ({ todos, setTodos }) => {
    const deleteTodos = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const updateTodos = (id) => {
        //https://react.vlpt.us/basic/15-array-modify.html 참고.. 잘 모르겠음..!
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
        // const newTodos = todos.map((todo) => {
        //   if(todo.id === id){
        //     return{
        //         ...todo,isDone: !todo.isDone,
        //     };
        //   }else{
        //     return {...todo};
        //   }
        // });
        // setTodos(newTodos);
    };

    return (
        <div className="todoItems">
            <h2 className="title">Working</h2>
            <div className="itemsWrapper">
                {todos.map(function (todo) {
                    if (!todo.isDone) {
                        return (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                deleteTodos={deleteTodos}
                                updateTodos={updateTodos}
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
                                todo={todo}
                                deleteTodos={deleteTodos}
                                updateTodos={updateTodos}
                            />
                        );
                    } else return null;
                })}
            </div>
        </div>
    );
};

export default TodoItems;
