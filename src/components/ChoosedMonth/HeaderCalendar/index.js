import { Wrapper } from "./HeaderCalendar.styled"

export const HeaderCalendar = ({today, prevHandler, nextHandler}) => {

    return(
        <Wrapper>
            <div>
        <span>{today.format('MMMM')}</span>
        <button type="button" onClick={prevHandler}>&lt;</button>
        <button type="button" onClick={nextHandler}>&gt;</button>
        </div>
        <div>
        <button type="button" >Month</button>
        <button type="button" >Day</button>
        </div>
        </Wrapper>
    )
}