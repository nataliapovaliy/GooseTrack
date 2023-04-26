import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  WeekInfoWrapper,
  DayOfWeek,
  DateWrapper,
  DateContainer,
} from './DayCalendarHead.styled';
import { nanoid } from 'nanoid';

const chooseIndexOfCurrentDay = date => {
  switch (date.toString().slice(0, 3).toUpperCase()) {
    case 'MON':
      return 0;
    case 'TUE':
      return 1;
    case 'WED':
      return 2;
    case 'THU':
      return 3;
    case 'FRI':
      return 4;
    case 'SAT':
      return 5;
    case 'SUN':
      return 6;
    default:
      return 0;
  }
};

export function DayCalendarHead({ clickChooseDay }) {
    const { currentDay } = useParams();
    console.log('From params', currentDay);
    const dayFromParams =
      currentDay === ':currentDay'
        ? String(new Date().getDate()).padStart(2, '0')
        : currentDay.slice(8, 10 ); 
 
  const currentDate = new Date();

  const [choosedDay, setChoosedDay] = useState(dayFromParams);

  console.log('choosedDay', choosedDay)

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
      <DateWrapper>
        {daysOfWeek.map((day, index) => {
          const date = new Date(currentDate);

          const currentDay = index % 7;

          date.setDate(
            currentDate.getDate() + currentDay - chooseIndexOfCurrentDay(date)
          );

          const dayOfWeek = date.toString().slice(0, 3).toUpperCase();
          const dayValue = String(date.getDate()).padStart(2, '0');
          const monthValue = String(date.getMonth() + 1).padStart(2, '0');
          const yearValue = String(date.getFullYear());

          const dateKey = `${day}-${dayValue}-${monthValue}-${yearValue}`;

          const isCurrentDay = date.toDateString().slice(8, 10) === choosedDay;

          return (
            <WeekInfoWrapper key={nanoid()}>
              <DayOfWeek key={dayOfWeek}>{dayOfWeek}</DayOfWeek>
              <DateContainer
                key={dateKey}
                onClick={() => {
                  handleClickDay(day, dayValue, monthValue, yearValue);
                } }
                style={{
                  backgroundColor: isCurrentDay ? 'var(--accent)' : 'inherit',
                  color: isCurrentDay ? 'var(--btn-text-color)' : 'inherit',
                }}
              >
                <p>{dayValue}</p>
              </DateContainer>
            </WeekInfoWrapper>
          );
        })}
      </DateWrapper>
    </Container>
  );
}
