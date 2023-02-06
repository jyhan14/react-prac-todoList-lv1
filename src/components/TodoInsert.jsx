import React from "react";

const TodoInsert = () =>{
    return(
        <form style={{display:"flex", justifyContent:"space-between", background:"#eee", padding:"30px"}}>
            <div style={{display:"flex"}}>
                <label>제목 : </label>
                <input type="text" />
                <label>내용 : </label>
                <input type="text" />
            </div>

            <button type="submit">추가하기</button>


        </form>
    )
}

export default TodoInsert;