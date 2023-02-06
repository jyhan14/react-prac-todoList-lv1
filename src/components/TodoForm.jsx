import React, { useState } from "react";
import './todoForm.css';

const TodoForm = ({todos, setTodos}) =>{
    const firstState ={
        id:0,
        title:"",
        body:"",
        isDone:false,
    }

    const [todo, setTodo] = useState(firstState);
    
    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setTodo({...todo, [name]:value, id:todos.length + 1});
    }

    return(
<form className="todoForm" onSubmit={(e) => {
    e.preventDefault();
    setTodos([...todos,todo]);
    setTodo(firstState);
}}>

<div className="inputs">
    <label>제목 : </label>
    <input type="text" name="title" value={todo.title} onInput={onChangeHandler}/>
    <label>내용 : </label>
    <input type="text" name="body" value={todo.body} onChange={onChangeHandler} />
</div>

<button>추가하기</button>



</form>


    )
}

export default TodoForm;