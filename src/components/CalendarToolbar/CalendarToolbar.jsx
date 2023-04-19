import { Icon, ToolbarButtonDay, ToolbarButtonLeft, ToolbarButtonMonth, ToolbarButtonRight, ToolbarContainer, ToolbarSpan, ToolbarWrap, ToolbarWrapper } from "./CalendatToolbar.styled"
import icon from '../../images/icons.svg';

export const HeaderCalendar = ({today, prevHandler, nextHandler, setDisplayMode}) => {

    return(
        <ToolbarContainer>
            <ToolbarWrapper>
                <ToolbarWrap type="button">
        <ToolbarSpan>{today.format('MMMM')}</ToolbarSpan>
        <ToolbarSpan>{today.format('Y')}</ToolbarSpan>
        </ToolbarWrap>
        <ToolbarButtonLeft type="button" onClick={prevHandler}>
        {/* <svg> <use href={icon + '#icon-chevron-left'}></use></svg> */}
        <Icon>
              <use href={`${icon}#icon-chevron-left`} />
            </Icon>

        {/* <svg> <use href={icon + '#icon-chevron-left'}></use></svg> */}
        </ToolbarButtonLeft>
        <ToolbarButtonRight type="button" onClick={nextHandler}><Icon> <use href={icon + '#icon-chevron-right'}></use></Icon></ToolbarButtonRight>
        </ToolbarWrapper>
        <div>
        <ToolbarButtonMonth type="button" onClick={() => setDisplayMode('month')}>Month</ToolbarButtonMonth>
        <ToolbarButtonDay type="button" onClick={() => setDisplayMode('day')}>Day</ToolbarButtonDay>
        </div>
        </ToolbarContainer>
    )
}

{/* <Wrapper>
            <Svg onClick={handleSidebarOpen}> <use href={icon + '#icon-menu'}></use></Svg>
            {isSidebarOpen && (<Overlay onClick={handleSidebarClose}> <SideBar/> </Overlay>)}
            <Wrapper></Wrapper> */}