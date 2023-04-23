import React, { useState } from 'react';
import {
  Container,
  WeekInfoWrapper,
  DayOfWeek,
  DateWrapper,
  DateContainer,
} from './DayCalendarHead.styled';

export const DayCalendarHead = ({ clickChooseDay }) => {
  const currentDate = new Date();
  const [choosedDay, setChoosedDay] = useState(
    String(currentDate.getDate()).padStart(2, '0')
  );
  currentDate.setDate(currentDate.getDate() - 7);

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const handleClickDay = (day, dayValue, monthValue, yearValue) => {
    const dateClickObject = {
      weekDay: day,
      day: dayValue,
      month: monthValue,
      year: yearValue,
    };
    setChoosedDay(dayValue);
    clickChooseDay(dateClickObject);
  };

  return (
    <Container>
      <WeekInfoWrapper>
        {daysOfWeek.map(day => (
          <DayOfWeek key={day}>
            <p>{day}</p>
          </DayOfWeek>
        ))}
      </WeekInfoWrapper>

      <DateWrapper>
        {daysOfWeek.map((day, index) => {
          const date = new Date(currentDate);
          const currentDay = (index + 1) % 8;
          date.setDate(currentDate.getDate() + currentDay);

          const dayValue = String(date.getDate()).padStart(2, '0');
          const monthValue = String(date.getMonth() + 1).padStart(2, '0');
          const yearValue = String(date.getFullYear());
          const dateKey = `${day}-${dayValue}-${monthValue}-${yearValue}`;

          const isCurrentDay = date.toDateString().slice(8, 10) === choosedDay;

          return (
            <DateContainer
              key={dateKey}
              onClick={() => {
                handleClickDay(day, dayValue, monthValue, yearValue);
              }}
              style={{
                backgroundColor: isCurrentDay ? 'var(--accent)' : 'inherit',
                color: isCurrentDay ? 'var(--btn-text-color)' : 'inherit',
              }}
            >
              <p>{dayValue}</p>
            </DateContainer>
          );
        })}
      </DateWrapper>
    </Container>
  );
};
