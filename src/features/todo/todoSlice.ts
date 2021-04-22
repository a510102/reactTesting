import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TodoId, Todo } from './types';
import { fetchTodos } from './fetchTodos';

type TodoState = {
  list: Todo[];
  status: "loading" | "idle";
  error: string | null;
}

const initialState = {
  list: [],
  error: null,
  status: "idle",
} as TodoState;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo (state: TodoState, action : PayloadAction<Todo>) {
      state.list.push(action.payload);
    },
    toggleTodo(state, action: PayloadAction<TodoId>) {
      state.list = state.list.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed } : todo);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = 'loading';
      state.error = null
    });
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.list.push(...payload);
      state.status = 'idle';
    });
    builder.addCase(fetchTodos.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = 'idle';
    })
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.list;
export const selectStatus = (state: RootState) => state.todos.status;

export default todosSlice.reducer;
