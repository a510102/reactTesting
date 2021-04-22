import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTodos, toggleTodo } from './todoSlice';

export const TodoList = () => {
  const todoList = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  return (
    <ul className='todo-list'>
      {
        todoList.map(todo => (
          <li 
            style={ todo.completed 
              ? {textDecoration: 'line-through'} 
              : {}} 
            className='todo-item'
            onClick={() => dispatch(toggleTodo(todo.id))}
            key={todo.id}>{todo.title}</li>
        ))
      }
    </ul>
  )
}