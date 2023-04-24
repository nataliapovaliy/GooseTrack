import {
  CellWrapper,
  ContainerCalendar,
  CurrentDay,
  DayWrapper,
  GridWrapper,
  RowInCell,
  ShowDayWrapper,
  TaskItem,
  TaskListWrapper,
} from './CalendarTable.styled';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { selectArrTasks } from 'redux/tasks/tasks-selectors';

export const CalendarTable = ({ startDay, today, totalDays }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => today.isSame(day, 'month');

  const tasks = useSelector(selectArrTasks);
  // console.log("++++", tasks);

  let priorityColor = '';
  let priorityTextColor = '';

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
              {tasks.map(
                task =>
                {
                  
                  if (task.priority === 'Low') {
                    priorityColor = 'var(--priority-low-color)' ;
                    priorityTextColor = 'var(--task-low-color)';
                  } else if (task.priority === 'Medium') {
                    priorityColor = 'var(--priority-med-color)';
                    priorityTextColor = 'var(--task-med-color)';
                  } else if (task.priority === 'High') {
                    priorityColor = 'var(--priority-high-color)' ;
                    priorityTextColor = 'var(--task-high-color)';
                  }
                  return task.createAt === dayItem.format('YYYY-MM-DD') && (
                    <TaskItem key={task._id} style={{ backgroundColor: priorityColor, color: priorityTextColor }}>{task.title}</TaskItem>
                  )
                }
              )}
            </TaskListWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
   </ContainerCalendar>
  );
};
