import styled from 'styled-components';

export const MonthCalendarHeadList = styled.ul`
display: flex;
justify-content: space-between;
border: 1px solid rgba(220, 227, 229, 0.8);
border-radius: 8px;
margin-bottom: 15px;
padding: 14px 60px;

font-weight: 600;
font-size: 16px;
line-height: 1.12;
text-transform: uppercase;
color: var(--task-field-text-color);
background-color: var(--main-background-color);
`

export const MonthCalendarHeadItem = styled.li`
color: var(--accent);
`
