import { CellWrapper, ContainerCalendar, DayWrapper, GridWrapper, RowInCell } from "./CalendarGrid.styled";


export const CalendarGrid = ({startDay}) => {
    const totalDays = 42;
    const day = startDay.clone().subtract(1, 'day');
    const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone())
    
    console.log(daysArray);

    return(
        // <ContainerCalendar>
        <GridWrapper>
{daysArray.map((dayItem) => (
    <CellWrapper key={dayItem.format('DDMMYYYY')}>
        <RowInCell justifyContent={'flex-end'}>
            <DayWrapper>
            {dayItem.format('D')}
            </DayWrapper>
        </RowInCell>
        
    </CellWrapper>
))}
        </GridWrapper>
    //    </ContainerCalendar>
    )
}