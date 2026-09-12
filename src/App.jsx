import './App.css';
import { AddTodo } from './components/AddTodo';
import TodoItem from './components/TodoItem';
import { TodoLayout } from './components/TodoLayout';

function App() {
  return (
    <div className="App">
      <TodoLayout/>
    </div>
  );
}

export default App;
