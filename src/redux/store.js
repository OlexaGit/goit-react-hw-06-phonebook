// import { combineReducers } from 'redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
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

import contactReducer from './contactSlice';
import filterReducer from './filterSlice';

// const reducers = combineReducers({
//   contactReducer,
//   filterReducer,
// });

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  // reducers,
  contactReducer
  // filterReducer
);

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
