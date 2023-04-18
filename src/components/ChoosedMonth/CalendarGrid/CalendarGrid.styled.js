import styled from 'styled-components';

export const GridWrapper = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(5, 1fr);
border: 1px solid rgba(220, 227, 229, 0.8);
border-radius: 8px;
background-color: var(--main-background-color);
/* grid-gap: 1px; */
`

export const CellWrapper = styled.div`
min-width: 155px;
min-height: 125px;
border: 1px solid #DCE3E5;
color: ${props => props.isSelectedMonth ?  'var(--calendar-date-color)' : 'var(--btn-text-color)'}; 
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
margin: 2px;
`

export const CurrentDay = styled.div`
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #3E85F3;
border-radius: 8px;
`

export const ContainerCalendar = styled.div`
height: 26px;
width: 26px;
display: flex;
align-items: center;
justify-content: center;
`