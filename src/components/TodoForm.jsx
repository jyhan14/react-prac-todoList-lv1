import React from "react";
import './todoForm.css';

const TodoForm = () =>{
    return(
        <form className="todoForm">
            <div className="inputs" style={{display:"flex"}}>
                <label>제목 : </label>
                <input type="text" />
                <label>내용 : </label>
                <input type="text" />
            </div>

            <button type="submit">추가하기</button>


        </form>
    )
}

export default TodoForm;