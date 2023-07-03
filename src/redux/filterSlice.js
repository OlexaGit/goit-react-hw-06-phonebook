import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    filterByValue(state, { payload: value }) {
      console.log(value);
      state.filter = value;
      console.log(state.filter.filter);

      //   const normalizedFilter = state.filter.toLocaleLowerCase();
      //   state.contacts = state.contacts.filter(contact =>
      //     contact.name.toLocaleLowerCase().includes(normalizedFilter)
      //   );
      //  state.contacts.filter(contact =>
      //   contact.name.toLocaleLowerCase().includes(normalizedFilter)
      // );
    },
  },
});

export const { filterByValue } = filterSlice.actions;
export default filterSlice.reducer;
export const filterSelectContacts = state => state.filter;
