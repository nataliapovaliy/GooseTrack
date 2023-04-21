import { Outlet } from 'react-router-dom';
import { HeaderCalendar } from 'components/CalendarToolbar/CalendarToolbar';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectArrTasks } from 'redux/tasks/tasks-selectors';
import { fetchTasks } from 'redux/tasks/tasks-operations';

// import { useEffect } from "react"
// import { tasksData } from "components/ChoosedDay/taskData"

//-------

// window.moment = moment;

export const CalendarPage = () => {
  const [today, setToday] = useState(moment());
  // const [tasks, setTasks] = useState([])
  const tasks = useSelector(selectArrTasks);
  console.log(tasks);

  const totalDays = 42;

  moment.updateLocale('en', { week: { dow: 1 } });
  const startDay = today.clone().startOf('month').startOf('week');

  // const startDateQuery = startDay.clone().format('X')
  // const endDateQuery = startDay.clone().add(totalDays).format('X')

  // const URL = tasksData

  // useEffect(() => {
  //     fetch(`${URL}/${startDateQuery}&${endDateQuery}`)
  //     .then(res => res.json())
  //     .then(res => {
  //         console.log(res);
  //         setTasks(res);
  //     });
  // }, [today])

  const prevHandler = () => {
    setToday(prev => prev.clone().subtract(1, 'month'));
  };
  const nextHandler = () => {
    setToday(next => next.clone().add(1, 'month'));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const currentDate = new Date();
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');

    dispatch(fetchTasks({ month, year }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HeaderCalendar
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
      <Outlet context={{ startDay, today, totalDays }} />
    </>
  );
};

// import { ChoosedDay } from "components/ChoosedDay/ChoosedDay"
// import { ChoosedMonth } from "components/ChoosedMonth/ChoosedMonth"

// export const CalendarPage = () => {
//   return (
//     <>
//       <ChoosedMonth />
//       <ChoosedDay />
//       </>
//   )
// }
//------------------------------
