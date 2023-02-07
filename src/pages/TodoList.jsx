import { useState } from "react";
import Layout from "../components/Layout";
import TodoForm from "../components/TodoForm";
import TodoItems from "../components/TodoItems";

const TodoList = () => {
    const [todos, setTodos] = useState([
        {
            id: 0,
            title: "리액트 공부하기",
            body: "리액트 기초를 공부해봅시다.",
            isDone: false,
        },
        {
            id: 1,
            title: "완료 test",
            body: "isDone에 true 넣어보기!",
            isDone: true,
        },
    ]);
    return (
        <>
            <Layout>
                <TodoForm todos={todos} setTodos={setTodos} />
                <TodoItems todos={todos} setTodos={setTodos} />
            </Layout>
        </>
    );
};

export default TodoList;