import './App.css';
import TodoInput from '../Todo/TodoInput';
import TodoList from '../Todo/TodoList';

function App() {
  return (
    <div className="App m-5">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
