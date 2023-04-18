export const selectIsLoading = state => state.auth.isLoading;
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectError = state => state.auth.error;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
export const selectToken = state => state.auth.token;
export const selectIsModalLogoutOpen = state => state.auth.isModalLogoutOpen;

//--------------------------------------------------------
// export const getIsFetchingCurrentUser = state => state.auth.isRefreshing;
// export const getIsLoggedIn = state => state.auth.isLoggedIn;
// export const getIsLoading = state => state.auth.isLoading;
// export const getIsModalLogoutOpen = state => state.auth.isModalLogoutOpen;
// export const getIsError = state => state.auth.error;
// export const getSizeViewport = state => state.auth.size;

// export const getUserName = state => state.auth.user;
// export const getUserEmail = state => state.auth.user.email;
