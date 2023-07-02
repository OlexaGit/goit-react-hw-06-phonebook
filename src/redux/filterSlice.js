import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = {
  contacts: [],
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    // editToDo(state, { payload: { activeId, query } }) {
    //   state.todos = state.todos.map(todo => {
    //     const { id } = todo;
    //     if (id === activeId) {
    //       return {
    //         ...todo,
    //         text: query,
    //       };
    //     } else return todo;
    //   });
    //   },

    filterByValue(state, { payload: value }) {
      console.log(value);
      state.filter = value;

      //   const normalizedFilter = state.filter.toLocaleLowerCase();
      //   state.contacts = state.contacts.filter(contact =>
      //     contact.name.toLocaleLowerCase().includes(normalizedFilter)
      //   );
      // return contacts.filter(contact =>
      //   contact.name.toLocaleLowerCase().includes(normalizedFilter)
      // );
    },
  },
});

export const { filterByValue } = filterSlice.actions;
export default filterSlice.reducer;
export const filterSelectContacts = state => state.filter;
