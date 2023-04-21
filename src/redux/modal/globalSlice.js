import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isModalAddTaskOpen: false,
    isModalUpDateTask: false,
    isModalConfirmation: false,
    isModalLogOut: false,
    isSideBar: false,
  },

  reducers: {
    openModalAddTask(state) {
      state.isModalAddTaskOpen = true;
    },
    closeModalAddTask(state) {
      state.isModalAddTaskOpen = false;
    },
    openModalUpDateTask(state) {
      state.isModalUpDateTask = true;
    },
    closeModalUpDateTask(state) {
      state.isModalUpDateTask = false;
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
    openSideBar(state) {
      state.isSideBar = true;
    },
    closeSideBar(state) {
      state.isSideBar = false;
    },
  },
});
export const {
  openModalLogOut,
  closeModalLogOut,
  openModalAddTask,
  closeModalAddTask,
  openModalUpDateTask,
  closeModalUpDateTask,
  openModalConfirmation,
  closeModalConfirmation,
  openSideBar,
  closeSideBar,
} = globalSlice.actions;
export default globalSlice.reducer;
