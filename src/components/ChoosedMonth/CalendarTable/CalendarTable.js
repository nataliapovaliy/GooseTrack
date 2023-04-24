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

export const CalendarTable = ({ startDay, today, totalDays }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => today.isSame(day, 'month');

  const tasks = useSelector(selectArrTasks);
  // console.log("++++", tasks);

  let xxx =[]

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
                <DayWrapper>
                  {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format('D')}</CurrentDay>
                  ) : (
                    dayItem.format('D')
                  )}
                </DayWrapper>
              </ShowDayWrapper>
              <TaskListWrapper>
                {tasks.map(task => {

                  return (
                    task.createAt === dayItem.format('YYYY-MM-DD') &&  (
                      <li key={task._id}>
                        <CalendarTaskDay task={task} />
                      </li>
                    )
                  );
                })}
              </TaskListWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </ContainerCalendar>
  );
};


{
  // const xxx = tasks.filter(task => 
  //   task.priority === 'Low' && task.createAt === dayItem.format('YYYY-MM-DD')
  //   )
  // console.log("!!!!!", xxx);


}