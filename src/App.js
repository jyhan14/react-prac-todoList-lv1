import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import TodoForm from './components/TodoForm';
import TodoItems from './components/TodoItems';

function App() {
  const [todos, setTodos] = useState ([{id:0, title:"", body:"", isDone:"false"}]);

  return (
    <>
    <Layout>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoItems />
    </Layout>
    </>
  );
}

export default App;
