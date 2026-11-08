import './App.css';
import { AddRecipe } from './components/AddRecipe';
import { AddTodo } from './components/AddTodo';
import { SearchCategory } from './components/SearchCategory';
import TodoItem from './components/TodoItem';
import { TodoLayout } from './components/TodoLayout';

function App() {
  return (
    <div className="App">
      <TodoLayout/>
      <AddRecipe/> 
      <SearchCategory/>
     </div>
  );
}

export default App;
