
import styled from 'styled-components';

export const MonthCalendarHeadList = styled.ul`
display: flex;
justify-content: space-between;
border: 1px solid rgba(220, 227, 229, 0.8);
border-radius: 8px;
margin-bottom: 14px;
padding: 16px 16px;

font-weight: 600;
font-size: 16px;
line-height: 1.12;
text-transform: uppercase;
color: var(--task-field-text-color);
background-color: var(--main-background-color);

@media screen and (min-width: 768px) {
    margin-bottom: 18px;
padding: 14px 40px;
}
@media screen and (min-width: 1440px) {
margin-bottom: 15px;
padding: 14px 60px;
}
`

export const MonthCalendarHeadItem = styled.li`
color: var(--accent) ;
`
