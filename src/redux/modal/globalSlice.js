import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isModalAddTransactionOpen: false,
    isModalUpDateTransaction: false,
    isModalConfirmation: false,
    isModalLogOut: false,
  },

  reducers: {
    openModalAddTransaction(state) {
      state.isModalAddTransactionOpen = true;
    },
    closeModalAddTransaction(state) {
      state.isModalAddTransactionOpen = false;
    },
    openModalUpDateTransaction(state) {
      state.isModalUpDateTransaction = true;
    },
    closeModalUpDateTransaction(state) {
      state.isModalUpDateTransaction = false;
    },
    openModalConfirmation(state) {
      state.isModalConfirmation = true;
    },
    closeModalConfirmation(state) {
      state.isModalConfirmation = false;
    },
    openModalLogOut(state) {
      state.isModalLogOut = true;
    },
    closeModalLogOut(state) {
      state.isModalLogOut = false;
    },
  },
});
export const {
  openModalLogOut,
  closeModalLogOut,
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalUpDateTransaction,
  closeModalUpDateTransaction,
  openModalConfirmation,
  closeModalConfirmation,
} = globalSlice.actions;
export default globalSlice.reducer;
