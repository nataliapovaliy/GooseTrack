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


export const CalendarTable = ({ startDay, today, currentDate }) => {
  const tasks = useSelector(selectArrTasks);
  const day = startDay.clone().subtract(1, 'day');


  // const ggg = new Date()

  // const kkk = ggg.clone().add(1, 'month');

  // const nextMonth = String(kkk).slice(4, 7)
  // console.log('!!!!!!!', nextMonth);

  let totalDays = 42;

  let daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

// const filterNextMonth = daysArray.filter(day => String(day._d).slice(4, 7) === nextMonth)
// console.log(filterNextMonth);

// if(filterNextMonth.length >= 7 ) {
//   totalDays = 35
//   daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone())
// }


  
  
  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => today.isSame(day, 'month');
  // console.log(currentDate);

  // let options = { weekday: 'long'};

  // const yyy = startDay.clone()

  // console.log(new Intl.DateTimeFormat('en-US').format());
  // // Monday

  // console.log("++++", daysArray);
  // console.log('++++', tasks.length);

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
                          <button type='button'>More...</button>
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
