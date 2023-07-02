import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // todos: []
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  //   name: 'todos',
  name: 'contacts',
  initialState,
  reducers: {
    // addToDo(state, { payload: newTodo }) {
    //   state.todos = [...state.todos, newTodo];
    //   },
    addContact(state, { payload: newContact }) {
      state.contacts = [...state.contacts, newContact];
    },

    deleteToDo(state, { payload: removeId }) {
      state.todos = state.todos.filter(({ id }) => id !== removeId);
    },
    incrementLikes(state, { payload: activeId }) {
      state.todos = state.todos.map(todo => {
        const { id, likes } = todo;
        if (id === activeId) {
          return {
            ...todo,
            likes: likes + 1,
          };
        } else return todo;
      });
    },
    decrementLikes(state, { payload: activeId }) {
      state.todos = state.todos.map(todo => {
        const { id, likes } = todo;
        if (id === activeId) {
          let newlikes = likes - 1;
          if (newlikes < 0) {
            newlikes = 0;
          }
          return {
            ...todo,
            likes: newlikes,
          };
        } else return todo;
      });
    },

    editToDo(state, { payload: { activeId, query } }) {
      state.todos = state.todos.map(todo => {
        const { id } = todo;
        if (id === activeId) {
          return {
            ...todo,
            text: query,
          };
        } else return todo;
      });
    },
  },
});

export const {
  addContact,
  deleteToDo,
  incrementLikes,
  decrementLikes,
  editToDo,
} = contactSlice.actions;
export default contactSlice.reducer;
export const selectTodos = state => state.todos;
