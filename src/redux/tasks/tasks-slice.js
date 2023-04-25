import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTasks,
  addTask,
  deleteTask,
  updateTask,
} from './tasks-operations';

const initialState = {
  arrTasks: [
    {
      taskId: null,
      title: '',
      start: '',
      end: '',
      createAt: '',
      owner: {},
      priority: '',
      status: '',
    },
  ],
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
        state.arrTasks = payload;
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
        state.arrTasks.push(payload.data.result);
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
        state.arrTasks = state.arrTasks.filter(task => task._id !== payload.id);
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
        // state.arrTasks = state.arrTasks.filter(
        //   task => task._id !== payload.data._id
        // );
        // state.arrTasks.push(payload.data);
        const updatedTaskIndex = state.arrTasks.findIndex(
          task => task._id === payload.data._id
        );

        if (updatedTaskIndex !== -1) {
          state.arrTasks[updatedTaskIndex] = payload.data;
        }
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
