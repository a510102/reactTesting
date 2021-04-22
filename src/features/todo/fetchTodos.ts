import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from './types';

type FetchError = {
  message: string;
}

export const fetchTodos = createAsyncThunk<
  Todo[],
  number,
  { rejectValue: FetchError }
>(
  'todos/fetch',
  async (limt: number = 1, thunkApi) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${limt}`);
    if (response.status !== 200) {
      return thunkApi.rejectWithValue({
        message: 'Fail to fetch todos.'
      })
    }
    const data: Todo[] = await response.json();

    return data
  }
)