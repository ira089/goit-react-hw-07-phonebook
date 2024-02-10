import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsAll,
  fetchContactsAdd,
  fetchContactsDelId,
} from '../api/contactApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const contacts = fetchContactsAll();
      return contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/post',
  async (data, thunkAPI) => {
    try {
      const contact = fetchContactsAdd(data);
      return contact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const contact = fetchContactsDelId(id);
      return contact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
