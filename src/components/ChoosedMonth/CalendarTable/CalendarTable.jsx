import {
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


export const CalendarTable = ({ startDay, today }) => {
  const day = startDay.clone().subtract(1, 'day');

  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => today.isSame(day, 'month');
  // console.log(currentDate);


  // === Змінюємо розміри календаря start ===>
  let totalDays = 35;
  const numberOfDays = day.clone().subtract(-1, 'month').daysInMonth();
  const isTheFirstDayOfTheMonth = day.clone().subtract(-1, 'month').startOf('month').format('dddd');


  if ((isTheFirstDayOfTheMonth.includes('Saturday') || isTheFirstDayOfTheMonth.includes('Sunday')) && numberOfDays === 31) totalDays = 42;
  if (isTheFirstDayOfTheMonth.includes('Sunday') && numberOfDays === 30) totalDays = 42;
  if (isTheFirstDayOfTheMonth.includes('Friday') && numberOfDays === 31) totalDays = 35;
  if (isTheFirstDayOfTheMonth.includes('Sunday') && numberOfDays === 29) totalDays = 35;
  if (isTheFirstDayOfTheMonth.includes('Sunday') && numberOfDays === 28) totalDays = 35;
  if (isTheFirstDayOfTheMonth.includes('Monday') && numberOfDays === 28) totalDays = 28;

// === Змінюємо розміри календаря end ===|

  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
  const tasks = useSelector(selectArrTasks);
  let xxx = 0;

  



  return (
    <ContainerCalendar>
      <GridWrapper>
        {daysArray.map(dayItem => (
          <CellWrapper
            key={dayItem.unix()}
            isSelectedMonth={isSelectedMonth(dayItem)}
          >
            <RowInCell justifyContent={'flex-end'}>
              <ShowDayWrapper>
                <DayWrapper >
                  {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format('D')}</CurrentDay>
                  ) : (
                    dayItem.format('D')
                  )}
                </DayWrapper>
              </ShowDayWrapper>
              <TaskListWrapper>
                {tasks.map(task => {
                  if (task.createAt === dayItem.format('YYYY-MM-DD')) {
                    xxx += 1;
                    if (xxx <= 2) {
                      return (
                        <li key={task._id}>
                          <CalendarTaskDay task={task} />
                        </li>
                      );
                    } else if (xxx === 3) {
                      return (
                        <li key="more">
                          <button>More...</button>
                        </li>
                      );
                    } else if (xxx > 3) {
                      xxx = 0;
                    }
                  }
                  return null;
                })}
              </TaskListWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </ContainerCalendar>
  );
};
