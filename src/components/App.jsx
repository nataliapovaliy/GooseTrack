import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { MainLayout } from 'pages/MainLayout/MainLayout';
import { AccountPage } from 'pages/AccountPage/AccountPage';
import { CalendarPage } from 'pages/CalendarPage/CalendarPage';
import { ChoosedDay } from 'components/ChoosedDay/ChoosedDay';
import { ChoosedMonth } from 'components/ChoosedMonth/ChoosedMonth';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(refreshUser());
    if (pathname === "/") {
      navigate("/calendar/month/:currentDate");
    }
  }, [dispatch, pathname, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<MainLayout />}>
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

        // <Route path="/login" element={<PublicRoute component={<LoginPage />} />}/>
        // <Route path="/register" element={<PublicRoute component={<RegisterPage />} />}/>
        // <Route path="/" element={<PrivateRoute component={<MainLayout />} />}>