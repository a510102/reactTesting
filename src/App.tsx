import './App.css';
import { AddTodo } from './features/todo/AddTodo';
import { TodoList } from './features/todo/TodoList';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export function divide (a: number, b:number): number {
  if (b === 0) {
    throw new Error ("You can't divide by zero");
  }

  return Math.round(a / b);
}

export default App;
