import styled from 'styled-components';

export const GridWrapper = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(5, 1fr);
border: 1px solid rgba(220, 227, 229, 0.8);
border-radius: 8px;
background-color: var(--main-background-color);
`

export const CellWrapper = styled.div`
min-width: 155px;
min-height: 125px;
padding: 14px;
border: 1px solid rgba(220, 227, 229, 0.8);
color: ${props => props.isSelectedMonth ?  'var(--calendar-date-color)' : 'var(--btn-text-color)'}; 
`

export const RowInCell = styled.div`
display: flex; 
flex-direction: column;
justify-content: ${props => props.justifyContent ?  props.justifyContent : 'flex-start'};
`

export const ShowDayWrapper = styled.div`
display: flex;
justify-content: flex-end;
`

export const TaskListWrapper = styled.ul`
margin: unset;
list-style-position: inside;
padding-left: 4px;
`

 export const TaskItem = styled.li`
 border-radius: 8px;
 padding: 4px 6px;
background-color: ${props => props.priority === 'Low' &&  'var(--priority-low-color)' || 
props.priority === 'Medium' &&  'var(--priority-med-color)'  || 
props.priority === 'High' &&  'var(--priority-high-color)' 
}
`


/* 
export const TaskItemLow = styled.li`
background-color: var(--task-low-color);
`

export const TaskItemMed = styled.li`
background-color: var(--task-med-color);
`

export const TaskItemHigh = styled.li`
background-color: var(--task-high-color);
` */



export const DayWrapper = styled.div`
height: 26px;
width: 26px;
display: flex;
align-items: center;
justify-content: center;
margin: 2px;

font-weight: 700;
font-size: 16px;
line-height: 1,2;
`

export const CurrentDay = styled.div`
padding: 4px 8px;
display: flex;
align-items: center;
justify-content: center;
background-color: var(--accent);
border-radius: 8px;
color: var(--btn-text-color);
`

export const ContainerCalendar = styled.div`
height: 26px;
width: 26px;
display: flex;
align-items: center;
justify-content: center;
`