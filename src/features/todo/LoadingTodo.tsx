import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTodos } from './fetchTodos';
import { selectStatus } from './todoSlice';

export const LoadingTodo = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  const getFetchTodo = () => dispatch(fetchTodos(100));
  return (
    <button onClick={getFetchTodo}>
      { status === 'loading' ? 'Loading Todos' : 'Fetch todos' }
    </button>
  )
} 