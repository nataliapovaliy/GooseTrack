import {
  CellWrapper,
  CurrentDay,
  DayWrapper,
  GridWrapper,
  RowInCell,
  ShowDayWrapper,
  TaskListWrapper,
} from './CalendarGrid.styled';
import moment from 'moment';

export const CalendarGrid = ({ startDay, today, totalDays, tasks }) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  // console.log(daysArray);

  const isCurrentDay = day => moment().isSame(day, 'day');
  const isSelectedMonth = day => today.isSame(day, 'month');

  return (
    // <ContainerCalendar>
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
                {/* <div>fgrgrg</div> */}
              {
              tasks.filter(task => task.date >= dayItem.format('X') && task.date <= dayItem.clone().endOf('day').format('X'))
              .map(task => (<li>{task.date}</li>))
              }
              
            </TaskListWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
    //    </ContainerCalendar>
  );
};
