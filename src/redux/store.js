import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contactClice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
