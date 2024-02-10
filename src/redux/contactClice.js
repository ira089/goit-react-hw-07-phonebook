import { createSlice } from '@reduxjs/toolkit';
// import { initialState } from './initialState';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
// import { nanoid } from 'nanoid';
// const STATUS = {
//   PENDING: 'pending',
//   FULFILLED: 'fulfilled',
//   REJECTED: 'rejected',
// };

// const arrThunks = [addContactsThunk, deleteContactsThunk, getContactsThunk];

// const fnThunks = type => arrThunks.map(el => el[type]);

const handlePending = state => {
  state.isLoading = true;
};

// const handleFulfilled = state => {
//   state.isLoading = false;
//   state.error = '';
// };

const handleFulfilledGet = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
  state.error = null;
};

const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.items.puch(action.payload);
  state.error = null;
};

const handleFulfilledDel = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(el => el.id !== payload.id);
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    // const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(addContactsThunk.rejected, handleRejected)
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDel)
      .addCase(deleteContactsThunk.rejected, handleRejected);
    // .addMatcher(isAnyOf(...fnThunks(PENDING)), handlePending)
    // .addMatcher(isAnyOf(...fnThunks(REJECTED)), handleRejected)
    // .addMatcher(isAnyOf(...fnThunks(FULFILLED)), handleFulfilled);
  },
});

export const contactReducer = contactSlice.reducer;
