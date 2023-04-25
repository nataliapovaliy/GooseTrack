import { useOutletContext } from 'react-router-dom';
import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';

export const ChoosedMonth = () => {
  const { startDay, today, totalDays } = useOutletContext();
  return (
    <>
      <MonthCalendarHead />
      <CalendarTable startDay={startDay} today={today} totalDays={totalDays} />
    </>
  );
};
