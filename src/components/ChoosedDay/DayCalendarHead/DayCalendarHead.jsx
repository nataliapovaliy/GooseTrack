import React, { useState } from 'react';
import {
  Container,
  WeekInfoWrapper,
  DayOfWeek,
  DateWrapper,
  DateContainer,
} from './DayCalendarHead.styled';

export const DayCalendarHead = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

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
          const dateKey = `${day}-${dayValue}-${monthValue}`;

          return (
            <DateContainer key={dateKey} onClick={() => {console.log('DATE CLICK')}}>
              <p>{dayValue}</p>
            </DateContainer>
          );
        })}
      </DateWrapper>
    </Container>
  );
};
