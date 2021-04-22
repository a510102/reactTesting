import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { addTodo } from './todoSlice';
import { LoadingTodo } from './LoadingTodo'; 

export const AddTodo = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
 
  const submitAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault(); 
    dispatch(addTodo({
      id: Date.now().toString(),
      completed: false,
      title
    }));
    setTitle('');
  };

  return (
    <>
    <form onSubmit={submitAddTodo}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' name='todoName' />
      <button type='submit'>ADD</button>
    </form>
    <LoadingTodo />
    </>
  )
}