import React from "react";

const TodoInsert = () =>{
    return(
        <form style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{display:"flex"}}>
                <div style={{paddingRight: "10px"}}>제목 : <input type="text" /></div>
                <div>내용 : <input type="text" /></div>
            </div>
            <div>
                <input type="submit" value={"추가하기"}/>
            </div>

        </form>
    )
}

export default TodoInsert;