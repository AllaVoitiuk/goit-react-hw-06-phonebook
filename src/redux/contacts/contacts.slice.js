import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    addContacts(state, { payload }) {
      state.contacts.push(payload);
      state.filter = '';
    },

    deleteContacts(state, { payload }) {
      console.log(payload);
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContacts, deleteContacts, findDubleContact } =
  contactsSlice.actions;
const persistConfig = {
  key: 'contacts',
  storage,

  whitelist: ['contacts'],
};
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
