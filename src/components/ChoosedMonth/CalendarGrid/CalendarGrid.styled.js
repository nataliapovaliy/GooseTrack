import styled from 'styled-components';

export const GridWrapper = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(5, 1fr);
background-color: var(--main-background-color);
/* grid-gap: 1px; */
`

export const CellWrapper = styled.div`
min-width: 155px;
min-height: 125px;
border: 1px solid #DCE3E5;
color: var(--calendar-date-color);
`

export const RowInCell = styled.div`
display: flex; 
justify-content: ${props => props.justifyContent ?  props.justifyContent : 'flex-start'};
`

export const DayWrapper = styled.div`
height: 26px;
width: 26px;
display: flex;
align-items: center;
justify-content: center;
`

export const ContainerCalendar = styled.div`
height: 26px;
width: 26px;
display: flex;
align-items: center;
justify-content: center;
`