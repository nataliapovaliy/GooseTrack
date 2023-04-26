import { Outlet } from 'react-router-dom';
import { HeaderCalendar } from 'components/CalendarToolbar/CalendarToolbar';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/tasks-operations';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

  const navigateToNextDate = currentDay => {
    const dayFromParams =
      currentDay === ':currentDay'
        ? new Date().toISOString().split('T')[0]
        : currentDay;

    let day = dayFromParams ? parseInt(dayFromParams.slice(8, 10), 10) : '';
    let month = dayFromParams ? parseInt(dayFromParams.slice(5, 7), 10) : '';
    let year = dayFromParams ? parseInt(dayFromParams.slice(0, 4), 10) : '';

    if (day && month && year) {
      day += 1;
      const lastDayOfMonth = new Date(year, month, 0).getDate();
      if (day > lastDayOfMonth) {
        day = 1;
        month += 1;
        if (month > 12) {
          month = 1;
          year += 1;
        }
      }
    }

    const nextDay = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
    return `/calendar/day/${nextDay}`;
};
  

const navigateToPrevDate = currentDay => {
  const dayFromParams =
    currentDay === ':currentDay'
      ? new Date().toISOString().split('T')[0]
      : currentDay;

  const day = dayFromParams.slice(8, 10);
  const month = dayFromParams.slice(5, 7);
  const year = dayFromParams.slice(0, 4);

  const prevDate = new Date(`${year}-${month}-${day}`);
  prevDate.setDate(prevDate.getDate() - 1);

  const prevDay = prevDate.getDate().toString().padStart(2, '0');
  const prevMonth = (prevDate.getMonth() + 1).toString().padStart(2, '0');
  const prevYear = prevDate.getFullYear();

  return prevDate < new Date('1900-01-01')
    ? '/calendar/day/:currentDay'
    : `/calendar/day/${prevYear}-${prevMonth}-${prevDay}`;
};
  
export const CalendarPage = () => {
  const [today, setToday] = useState(moment());
  const { currentDay } = useParams();
  const navigate = useNavigate();

  // const totalDays = 42;

  moment.updateLocale('en', { week: { dow: 1 } });
  const startDay = today.clone().startOf('month').startOf('week');

  const prevHandler = () => {
     if (!currentDay && typeof currentDay === 'undefined') {
      setToday(prev => prev.clone().subtract(1, 'month'));
      return
    }
    navigate(navigateToPrevDate(currentDay));
  };
  const nextHandler = () => {
  
    if (!currentDay && typeof currentDay === 'undefined') {
      setToday(next => next.clone().add(1, 'month'));
      return;
    }
    navigate(navigateToNextDate(currentDay));

    // console.log(setToday());

    // setToday(next => next.clone().add(1, 'month'));
  };

  const dispatch = useDispatch();
  const currentDate = new Date(today);

  // console.log(currentDate);

  useEffect(() => {
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth('M') + 1).padStart(2, '0');
    dispatch(fetchTasks({ month, year }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  return (
    <>
      <HeaderCalendar
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <Outlet context={{ startDay, today, currentDate }} />
    </>
  );
};
