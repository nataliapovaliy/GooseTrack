import React from 'react';
import {
  Container,
  WeekInfoWrapper,
  DayOfWeek,
  DateWrapper,
  DateContainer,
} from './DayCalendarHead.styled';

export const DayCalendarHead = () => {
  const currentDate = new Date();
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <Container>
      <WeekInfoWrapper>
        {daysOfWeek.map(day => (
          <DayOfWeek key={day}>
            <h3>{day}</h3>
          </DayOfWeek>
        ))}
      </WeekInfoWrapper>
      <DateWrapper>
        {daysOfWeek.map((day, index) => {
          const date = new Date(currentDate);
          date.setDate(currentDate.getDate() + index);
          const dayValue = String(date.getDate()).padStart(2, '0');
          const monthValue = String(date.getMonth() + 1).padStart(2, '0');
          const dateKey = `${day}-${dayValue}-${monthValue}`;
          console.log('>>>>', monthValue);
          return (
            <DateContainer key={dateKey}>
              <p>
                {dayValue}
              </p>
            </DateContainer>
          );
        })}
      </DateWrapper>
    </Container>
  );
};
