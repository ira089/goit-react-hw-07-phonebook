import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestFetchContacts,
  requestAddContacts,
  requestDeleteContacts,
} from '../api/contactApi';

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  requestFetchContacts()
);

export const addContactsThunk = createAsyncThunk('contacts/add', data =>
  requestAddContacts(data)
);

export const deleteContactsThunk = createAsyncThunk('contacts/delete', id =>
  requestDeleteContacts(id)
);
