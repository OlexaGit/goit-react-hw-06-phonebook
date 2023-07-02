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
    addContact(state, { payload: newContact }) {
      state.contacts = [...state.contacts, newContact];
    },

    deleteContact(state, { payload: removeId }) {
      state.contacts = state.contacts.filter(({ id }) => id !== removeId);
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

export const { addContact, deleteContact, editToDo } = contactSlice.actions;
export default contactSlice.reducer;
export const selectTodos = state => state.todos;
export const selectContacts = state => state.contacts;
