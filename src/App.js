import './App.css';
import Layout from './components/Layout';
import TodoForm from './components/TodoForm';
import TodoItems from './components/TodoItems';

function App() {
  return (
    <>
    <Layout>
      <TodoForm/>
      <TodoItems/>
    </Layout>
    </>
  );
}

export default App;
