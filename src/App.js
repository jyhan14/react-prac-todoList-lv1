import './App.css';
import Layout from './components/Layout';
import TodoInsert from './components/TodoInsert';
import TodoItems from './components/TodoItems';

function App() {
  return (
    <>
    <Layout>
      <TodoInsert/>
      <TodoItems/>
    </Layout>
    </>
  );
}

export default App;
