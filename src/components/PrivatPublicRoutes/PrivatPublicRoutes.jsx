const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectIsLoggedIn } = require('redux/auth/auth-selectors');

export const PrivateRoute = ({ component: Component }) => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return !loggedIn ? <Navigate to="/start" /> : Component;
};

export const PublicRoute = ({ component: Component }) => {
  const loggedIn = useSelector(selectIsLoggedIn);

  return loggedIn ? <Navigate to="/" /> : Component;
};
