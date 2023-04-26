import {
  CalendarTableMoreBtn,
  CellWrapper,
  ContainerCalendar,
  CurrentDay,
  DayWrapper,
  GridWrapper,
  RowInCell,
  ShowDayWrapper,
  TaskListWrapper,
} from './CalendarTable.styled';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { selectArrTasks } from 'redux/tasks/tasks-selectors';
import { CalendarTaskDay } from './CalendarTaskDay/CalendarTaskDay';
import { useNavigate } from 'react-router-dom';

// import { useEffect, useRef } from 'react';
// import { useRef } from 'react';

export const CalendarTable = ({ startDay, today }) => {
  const navigate = useNavigate();
  const day = startDay.clone().subtract(1, 'day');

  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => today.isSame(day, 'month');

  // === Змінюємо розміри календаря start ===>
  // let totalDaysRef = useRef(35);
  // let totalDaysRef = useRef(42);

  // useEffect(() => {
        let totalDays = 35;
        const numberOfDays = day.clone().subtract(-1, 'month').daysInMonth();
        const isTheFirstDayOfTheMonth = day.clone().subtract(-1, 'month').startOf('month').format('dddd');
       if ((isTheFirstDayOfTheMonth.includes('Saturday') || isTheFirstDayOfTheMonth.includes('Sunday')) && numberOfDays === 31)
         totalDays = 42;
       if (isTheFirstDayOfTheMonth.includes('Sunday') && numberOfDays === 30)
         totalDays = 42;
       if (isTheFirstDayOfTheMonth.includes('Friday') && numberOfDays === 31)
         totalDays = 35;
       if (isTheFirstDayOfTheMonth.includes('Sunday') && numberOfDays === 29)
         totalDays = 35;
       if (isTheFirstDayOfTheMonth.includes('Sunday') && numberOfDays === 28)
         totalDays = 35;
       if (isTheFirstDayOfTheMonth.includes('Monday') && numberOfDays === 28)
         totalDays = 28;
    // eslint-disable-next-line 
  // }, []);
  
  // === Змінюємо розміри календаря end ===|

  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
  const tasks = useSelector(selectArrTasks);

  return (
    <ContainerCalendar>
      <GridWrapper>
        {daysArray.map(dayItem => (
          <CellWrapper
            key={dayItem.unix()}
            isSelectedMonth={isSelectedMonth(dayItem)}
            type="button"
            onClick={() => {
              navigate(`/calendar/day/${dayItem.format('YYYY-MM-DD')}`);
            }}
          >
            <RowInCell justifyContent={'flex-end'}>
              <ShowDayWrapper>
                <DayWrapper>
                  {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format('D')}</CurrentDay>
                  ) : (
                    dayItem.format('D')
                  )}
                </DayWrapper>
              </ShowDayWrapper>
              <TaskListWrapper>
                {tasks
                  .filter(
                    task => task.createAt === dayItem.format('YYYY-MM-DD')
                  )
                  .slice(0, 2)
                  .map(task => (
                    <li key={task._id}>
                      <CalendarTaskDay task={task} />
                    </li>
                  ))}
                {tasks.filter(
                  task => task.createAt === dayItem.format('YYYY-MM-DD')
                ).length > 2 && (
                  <li key="more">
                    <CalendarTableMoreBtn type='button'>See all...</CalendarTableMoreBtn>
                  </li>
                )}
                
              </TaskListWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </ContainerCalendar>
  );
};
