import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

const increment = createAction('myValue/increment');
const contacts = createAction('arrayContacts/contacts');
const filter = createAction('filterValue/filter');

const myReducerTest = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
});
const contactsReducer = createReducer([], {
  [contacts]: (state, action) => state + action.payload,
});
const filterReducer = createReducer('', {
  [filter]: (state, action) => state + action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReducerTest,
    arrayContacts: contactsReducer,
    filterValue: filterReducer,
  },
});

// {
//   contacts: [],
//   filter: ""
// }
