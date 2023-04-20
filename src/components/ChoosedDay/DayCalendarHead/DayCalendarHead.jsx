import React, { useState } from 'react';
import {
  Container,
  WeekInfoWrapper,
  DayOfWeek,
  DateWrapper,
  DateContainer,
} from './DayCalendarHead.styled';

export const DayCalendarHead = ({ clickChooseDay }) => {
  const [currentDate] = useState(new Date());
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  // console.log(setCurrentDate);

  const handleClickDay = (day, dayValue, monthValue, yearValue) => {
    const dateClickObject = {
      weekDay: day,
      day: dayValue,
      month: monthValue,
      year: yearValue,
    };

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
          date.setDate(currentDate.getDate() + index);

          const dayValue = String(date.getDate() - 1).padStart(2, '0');
          const monthValue = String(date.getMonth() + 1).padStart(2, '0');
          const yearValue = String(date.getFullYear());
          const dateKey = `${day}-${dayValue}-${monthValue}-${yearValue}`;

          return (
            <DateContainer
              key={dateKey}
              onClick={() => {
                handleClickDay(day, dayValue, monthValue, yearValue);
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
