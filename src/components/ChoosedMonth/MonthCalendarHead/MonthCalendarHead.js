import {
  MonthCalendarHeadItem,
  MonthCalendarHeadList,
} from './MonthCalendarHead.styled';

export const MonthCalendarHead = () => {
  const arrayMonth = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <>
      <MonthCalendarHeadList>
        {arrayMonth.map(dayItem => (
          <MonthCalendarHeadItem
            key={dayItem}
            isWeekend={dayItem === 'Sat' || dayItem === 'Sun'}
          >
            <p>{dayItem}</p>
          </MonthCalendarHeadItem>
        ))}
      </MonthCalendarHeadList>
    </>
  );
};
