import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import contactsReducer from './contactSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

// import { createAction, createReducer } from '@reduxjs/toolkit';

// const initialState = { contacts: [] };

// export const increment = createAction('myValue/increment');

// export const filter = createAction('valueFilter/filter');

// const myReducerTest = createReducer(100, {
//   [increment]: (state, action) => state + action.payload,
// });

// export const addContact = createAction('Contacts/addContact');
// export const deleteContact = createAction('Contacts/deleteContact');
// const contactsReducer = createReducer([], {
//   [addContact]: (state, { payload: newContact }) => [...state, newContact],
//   [deleteContact]: (state, { payload: removeId }) => {
//     state.contacts = state.contacts.filter(({ id }) => id !== removeId);
//   },
// });
// const filterReducer = createReducer('', {
//   [filter]: (state, action) => state + action.payload,
// });

// export const store = configureStore({
//   reducer: {
//     myValue: myReducerTest,
//     arrayContacts: contactsReducer,
//     valueFilter: filterReducer,
//   },
// });
