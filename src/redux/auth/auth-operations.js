import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://goosetrackapi.onrender.com/';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Sign up new user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', user);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      Notify.failure('Please check your email and password and try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Sign in existing user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/auth/login', user);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    Notify.failure('Please change your email ore name and try again');
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Signs out user
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.delete('/user/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// get info current User

export const fetchingCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get('/user/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.patch('/user/info', user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://wallet.goit.ua/';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/api/auth/sign-up', credentials);
//       token.set(data.token);
//       console.log(data.token.set);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/api/auth/sign-in', credentials);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.delete('/api/auth/sign-out');
//       token.unset();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue();
//     }

//     try {
//       token.set(persistedToken);
//       const response = await axios.get('/api/users/current');
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
