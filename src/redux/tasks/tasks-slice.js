import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
} from './tasks-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchTasks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(task => task.id === payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
