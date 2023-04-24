import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goosetrackapi.onrender.com/';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async ({ month, year }, thunkAPI) => {
    try {
      const { data } = await axios.get('/tasks', {
        params: {
          m: month,
          y: year,
        },
      });
      // console.log('!!!!!!!! tasks/fetchTasks >>>>>>', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', task);
      // console.log('!!! tasks/addTask >>>>>>>>>', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (task, thunkAPI) => {
    try {
      console.log(task);
      const response = await axios.patch(`/tasks/${task.id}`, task.task);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchTasks = createAsyncThunk(
//   'tasks/fetchTasks',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/tasks');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
