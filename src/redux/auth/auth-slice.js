import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  fetchingCurrentUser,
  updateUser,
} from './auth-operations';

const initialState = {
  token: null,
  user: {
    email: '',
    phone: '',
    avatarURL: '',
    birthday: '',
    skype: '',
    name: '',
  },
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
  isModalLogoutOpen: false,
};

const authController = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openModalLogout(state) {
      state.isModalLogoutOpen = true;
      state.error = null;
    },
    closeModalLogout(state) {
      state.isModalLogoutOpen = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        console.log(`register fulfilled payload: ${payload}`);
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        console.log(`register rejected payload: ${payload}`);
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.token = null;
        state.isLoggedIn = false;
        state.isModalLogoutOpen = false;
        state.user = {
          email: '',
          phone: '',
          avatarURL: '',
          birthday: '',
          skype: '',
          name: '',
        };
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchingCurrentUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchingCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchingCurrentUser.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = payload;
        state.isFetchingCurrentUser = false;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // return { ...state, ...payload };
        state.user = payload.user;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authController.reducer;
// export const { openModalLogout, closeModalLogout } = authController.actions;
//----------------------------------------------------------------------------------
// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import {
//   register,
//   login,
//   logout,
//   fetchingCurrentUser,
//   updateUser,
// } from './auth-operations';

// const setError = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
//   console.log(action.payload);
// };

// const setPending = state => {
//   state.isLoading = true;
// };

// const initialState = {
//   token: null,
//   user: {
//     email: '',
//     phone: '',
//     avatarURL: null,
//     birthday: '',
//     skype: '',
//     name: '',
//   },
//   isLoggedIn: false,
//   isLoading: false,
//   error: null,
//   isFetchingCurrentUser: false,
//   isModalLogoutOpen: false,
// };

// const extraActions = [register, login, logout, fetchingCurrentUser, updateUser];
// const createActions = type => {
//   return extraActions.map(action => action[type]);
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     openModalLogout(state) {
//       state.isModalLogoutOpen = true;
//       state.error = null;
//     },
//     closeModalLogout(state) {
//       state.isModalLogoutOpen = false;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(register.fulfilled, (state, { payload }) => {
//         state.token = payload.token;
//         state.user = payload.user;
//         state.isLoggedIn = true;
//         state.isLoading = false;
//       })
//       .addCase(login.fulfilled, (state, { payload }) => {
//         state.token = payload.token;
//         state.user = payload.user;
//         state.isLoggedIn = true;
//         state.isLoading = false;
//       })
//       .addCase(logout.fulfilled, state => {
//         state.isLoading = false;
//         state.token = null;
//         state.isLoggedIn = false;
//         state.isModalLogoutOpen = false;
//         state.user = {
//           name: '',
//           id: '',
//           username: '',
//           email: '',
//           balance: 0,
//         };
//       })
//       .addCase(fetchingCurrentUser.fulfilled, (state, { payload }) => {
//         state.user = payload;
//         state.isLoggedIn = true;
//         state.isLoading = false;
//         state.isFetchingCurrentUser = false;
//       })
//       .addCase(updateUser.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.user = payload;
//       })
//       .addMatcher(isAnyOf(...createActions('pending')), setPending)
//       .addMatcher(isAnyOf(...createActions('rejected')), setError);
//   },
// });

// export const authReducer = authSlice.reducer;
// export const { openModalLogout, closeModalLogout } = authController.actions;

//-------------------------------------------------------------------

// import { createSlice } from '@reduxjs/toolkit';
// import { register, login, logout, refreshUser } from './auth-operations';
// const initialState = {
//   user: { name: '', email: '', balance: null },
//   token: null,
//   isLoading: false,
//   isLoggedIn: false,
//   isRefreshing: false,
//   isModalLogoutOpen: false,
//   error: null,
//   size: false,
// };
// const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };
// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.isLoggedIn = false;
//   state.error = payload;
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     openModalLogout(state) {
//       state.isModalLogoutOpen = true;
//       state.error = null;
//     },
//     closeModalLogout(state) {
//       state.isModalLogoutOpen = false;
//     },
//     mobSizeHandler(state) {
//       state.size = true;
//     },
//     sizeHandler(state) {
//       state.size = false;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(register.pending, handlePending)
//       .addCase(register.fulfilled, (state, { payload }) => {
//         state.user = payload.user;
//         state.token = payload.token;
//         state.isLoggedIn = true;
//         state.isLoading = false;
//         console.log(state.token);
//       })
//       .addCase(register.rejected, handleRejected)
//       .addCase(login.pending, handlePending)
//       .addCase(login.fulfilled, (state, { payload }) => {
//         state.user = payload.user;
//         state.token = payload.token;
//         state.isLoggedIn = true;
//         state.isLoading = false;
//         console.log(state.token);
//       })
//       .addCase(login.rejected, handleRejected)
//       .addCase(logout.pending, handlePending)
//       .addCase(logout.fulfilled, state => {
//         state.isLoading = false;
//         state.user = { name: '', email: '' };
//         state.token = null;
//         state.isModalLogoutOpen = false;
//         state.isLoggedIn = false;
//       })
//       .addCase(logout.rejected, handleRejected)
//       .addCase(refreshUser.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, { payload }) => {
//         state.user = payload;
//         state.isLoggedIn = true;
//         state.isLoading = false;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, (state, { payload }) => {
//         state.isLoading = false;
//         state.isLoggedIn = false;
//         state.error = payload;
//         state.isRefreshing = false;
//       });
//   },
// });
// export const {
//   openModalLogout,
//   closeModalLogout,
//   mobSizeHandler,
//   sizeHandler,
// } = authSlice.actions;
// export default authSlice.reducer;
