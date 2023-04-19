import { ToolbarButton, ToolbarButtonDay, ToolbarButtonMonth, ToolbarContainer, ToolbarSpan, ToolbarWrap, ToolbarWrapper } from "./CalendatToolbar.styled"

export const HeaderCalendar = ({today, prevHandler, nextHandler, setDisplayMode}) => {

    return(
        <ToolbarContainer>
            <ToolbarWrapper>
                <ToolbarWrap>
        <ToolbarSpan>{today.format('MMMM')}</ToolbarSpan>
        <ToolbarSpan>{today.format('Y')}</ToolbarSpan>
        </ToolbarWrap>
        <ToolbarButton type="button" onClick={prevHandler}>&lt;</ToolbarButton>
        <ToolbarButton type="button" onClick={nextHandler}>&gt;</ToolbarButton>
        </ToolbarWrapper>
        <div>
        <ToolbarButtonMonth type="button" onClick={() => setDisplayMode('month')}>Month</ToolbarButtonMonth>
        <ToolbarButtonDay type="button" onClick={() => setDisplayMode('day')}>Day</ToolbarButtonDay>
        </div>
        </ToolbarContainer>
    )
}