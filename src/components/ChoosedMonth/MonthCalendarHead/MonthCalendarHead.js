import { MonthCalendarHeadItem, MonthCalendarHeadList } from './MonthCalendarHead.styled';

export const MonthCalendarHead = () => {
  return (
    <>
      <MonthCalendarHeadList>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <MonthCalendarHeadItem>Sat</MonthCalendarHeadItem>
        <MonthCalendarHeadItem>Sun</MonthCalendarHeadItem>
      </MonthCalendarHeadList>
    </>
  );
};

// Mon Tue Wed Thu Fri Sat Sun
