import { CellWrapper, CurrentDay, DayWrapper, GridWrapper, RowInCell } from "./CalendarGrid.styled";
import moment from 'moment'

export const CalendarGrid = ({startDay, today, totalDays}) => {
    
    const day = startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone())
    
    // console.log(daysArray);

    const isCurrentDay = (day) => moment().isSame(day, 'day');
    const isSelectedMonth = (day) => today.isSame(day, 'month');

    
    return(
        // <ContainerCalendar>
        <GridWrapper>
{daysArray.map((dayItem) => (
    <CellWrapper key={dayItem.format('DDMMYYYY')} isSelectedMonth={isSelectedMonth(dayItem)}>
        <RowInCell justifyContent={'flex-end'}>
            <DayWrapper>
               {
               isCurrentDay(dayItem) ? (
               <CurrentDay>{dayItem.format('D')}</CurrentDay> 
               ) : (
                dayItem.format('D')
               )}
            </DayWrapper>
        </RowInCell>
        
    </CellWrapper>
))}
        </GridWrapper>
    //    </ContainerCalendar>
    )
}