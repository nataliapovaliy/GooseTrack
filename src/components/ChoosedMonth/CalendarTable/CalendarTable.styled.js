import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  background-color: var(--main-background-color);
`;

export const CellWrapper = styled.div`
  width: 48px;
  height: 94px;
  padding: 12px 10px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  color: ${props =>
    props.isSelectedMonth
      ? 'var(--calendar-date-color)'
      : 'red'};

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 144px;
    padding: 18px 22px 8px 8px;
  }
  @media screen and (min-width: 1440px) {
    width: 155px;
    height: 125px;
  }
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TaskListWrapper = styled.ul`
  margin: unset;
  list-style-position: inside;
  padding-left: 4px;
`;

export const TaskItem = styled.button`
  border-radius: 8px;
  padding: 4px 12px 4px 10px;
  border: none;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: start;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1440px) {
  font-size: 14px;
  line-height: 1.28;
  }
`;

export const DayWrapper = styled.div`
  height: 15px;
  width: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.16;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  line-height: 1.2;
}
@media screen and (min-width: 1440px) {
    height: 26px;
  width: 26px;

  font-size: 16px;
  line-height: 1.2;
}

`;

export const CurrentDay = styled.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent);
  border-radius: 8px;
  color: var(--btn-text-color);
`;

export const ContainerCalendar = styled.div`
  /* height: 626px; */
`;




export const CalendarTableMoreBtn = styled.button`
  color: var(--btn-text-color);
  border: none;
  border-radius: 8px;
  background-color: red;
  
  padding: 4px 12px 4px 10px;
  text-align: start;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  cursor: pointer;

`;