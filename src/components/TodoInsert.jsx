import React from "react";

const TodoInsert = () =>{
    return(
        <form style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{display:"flex"}}>
                <label>제목 : </label>
                <input type="text" />
                <label>내용 : </label>
                <input type="text" />
            </div>

                <input type="submit" value={"추가하기"}/>


        </form>
    )
}

export default TodoInsert;