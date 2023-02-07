import React from "react";
import './todoItems.css';
import Todo from '../todo/Todo';

const TodoItems = ({todos,setTodos}) => {

    return(
        <div className="todoItems">
            <h2 className="title">Working</h2>
            <div className="itemsWrapper">
                    {todos.map((todo) => {
                        if(!todo.isDone){
                            return (
                                <Todo
                                todo = {todo}
                                key={todo.id}
                                setTodos={setTodos}
                                todos ={todos}
                                />
                            );
                        }
                    })}
            </div>
            <h2 className="title">Done</h2>
            <div className="itemsWrapper">
                {todos.map((todo) => {
                        if(todo.isDone){
                            return (
                                <Todo
                                todo = {todo}
                                key={todo.id}
                                setTodos={setTodos}
                                todos ={todos}
                                />
                            );
                        }else{
                            return null;
                        }
                    })}
            </div>
        </div>
    );
};

export default TodoItems;