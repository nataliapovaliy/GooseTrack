import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selectors';
import { fetchingCurrentUser } from 'redux/auth/auth-operations';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { MainLayout } from 'pages/MainLayout/MainLayout';
import { AccountPage } from 'pages/AccountPage/AccountPage';
import { CalendarPage } from 'pages/CalendarPage/CalendarPage';
import { ChoosedDay } from 'components/ChoosedDay/ChoosedDay';
import { ChoosedMonth } from 'components/ChoosedMonth/ChoosedMonth';
import { PrivateRoute, PublicRoute } from 'components/PrivatPublicRoutes/PrivatPublicRoutes';
import { StartPage } from 'pages/StartPage/StartPage';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const isFetchingUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchingCurrentUser());
    if (pathname === "/") {
      navigate("/calendar/month/:currentDate");
    }
  }, [dispatch, pathname, navigate]);

  // return isFetchingUser ? ( <div>Loading...</div>) : (
  // прибрав Лоадінг, бо переренджується вся структура і втрачається сенс MainLayout - Alex
  return (
    <Routes>
      <Route path="/start" element={<PublicRoute component={<StartPage />} />}/>
      <Route path="/login" element={<PublicRoute component={<LoginPage />} />}/>
      <Route path="/register" element={<PublicRoute component={<RegisterPage />} />}/>
      <Route path="/" element={<PrivateRoute component={<MainLayout />} />}>
        <Route path="/account" element={<AccountPage />} />
        <Route path="/calendar" element={<CalendarPage />}>
          <Route path="month/:currentDate" element={<ChoosedMonth />} />
          <Route path="day/:currentDay" element={<ChoosedDay />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/calendar" />} />
    </Routes>
  );
};

export { App };