import styled from 'styled-components';

export const Container = styled.div`
  height: 68px;
  width: 1087px;
  padding: 10px 40px;
  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const WeekInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;

export const DayOfWeek = styled.div`
  
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: #616161;
`;

export const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 26px;
`;

export const DateContainer = styled.button`
  
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  width: 27px;
  height: 26px;
  border-radius: 8px;
  background-color: transparent;
  padding-left: 0px 0px 0px 0px;
  border: none;
`;
