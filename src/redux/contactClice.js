import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from './operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
// import { nanoid } from 'nanoid';
const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [addContactsThunk, deleteContactsThunk, getContactsThunk];

const fnThunks = type => arrThunks.map(el => el[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledGet = (state, { payload }) => {
  // state.isLoading = false;
  state.contacts = payload;
  // state.error = '';
};

const handleFulfilledAdd = (state, { payload }) => {
  // state.isLoading = false;
  state.contacts.puch(payload);
  // state.error = '';
};

const handleFulfilledDel = (state, { payload }) => {
  // state.isLoading = false;
  state.contacts = state.contacts.filter(el => el.id !== payload.id);
  // state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const contactSlice = createSlice({
  name: 'contacts',

  initialState,

  // state={contacts: {items: [],
  // isLoading: false,
  // error: null,}}

  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      // .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      // .addCase(getContactsThunk.rejected, handleRejected)
      // .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      // .addCase(addContactsThunk.rejected, handleRejected)
      // .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDel)
      // .addCase(deleteContactsThunk.rejected, handleRejected)
      .addMatcher(isAnyOf(...fnThunks(PENDING)), handlePending)
      .addMatcher(isAnyOf(...fnThunks(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...fnThunks(FULFILLED)), handleFulfilled);
  },
});

export const contactReducer = contactSlice.reducer;
// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//   },
//   // state= {contacts: {contacts: contactExample}}
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push({
//         id: nanoid(),
//         name: action.payload.name,
//         number: action.payload.number,
//       });
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(el => el.id !== action.payload.id);
//     },
//   },
// });

// const persistConfig = {
//   key: 'contactsLS',
//   storage,
//   stateReconciler: hardSet,
// };

// export const contactReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );
// export const { addContact, deleteContact } = contactSlice.actions;
