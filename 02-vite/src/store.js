import { configureStore, createSlice } from '@reduxjs/toolkit';

// La partie concernant les todos
const todoSlice = createSlice({
  name: 'todo',

  // Les données
  initialState: [
    { id: 1, text: 'Faire les courses', done: false },
    { id: 2, text: 'Ménage !', done: true },
  ],

  // Les actions sur ces données
  reducers: {
    addTodo: (state, action) => {
        const newTodo = { id: Date.now(), text: action.payload, done: false };

        state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;

// On va créer le store global
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
