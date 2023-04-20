import {
  Icon,
  ToolbarButtonDay,
  ToolbarButtonLeft,
  ToolbarButtonMonth,
  ToolbarButtonRight,
  ToolbarContainer,
  ToolbarSpan,
  ToolbarWrap,
  ToolbarWrapper,
} from './CalendatToolbar.styled';
import icon from '../../images/icons.svg';
import { MyApp } from './ReactLightCalendar';


export const HeaderCalendar = ({
  today,
  prevHandler,
  nextHandler,
  setDisplayMode,
}) => {


  return (
    <ToolbarContainer>
      <ToolbarWrapper>
        <ToolbarWrap type="button">
          <ToolbarSpan>{today.format('MMMM')}</ToolbarSpan>
          <ToolbarSpan>{today.format('Y')}</ToolbarSpan>
        </ToolbarWrap>
        <ToolbarButtonLeft type="button" onClick={prevHandler}>
          <Icon>
            <use href={`${icon}#icon-chevron-right-new`} />
          </Icon>
        </ToolbarButtonLeft>
        <ToolbarButtonRight type="button" onClick={nextHandler}>
          <Icon>
            {' '}
            <use href={`${icon}#icon-chevron-left-new`} />
          </Icon>
        </ToolbarButtonRight>
      </ToolbarWrapper>
      <div>
        <ToolbarButtonMonth
          type="button"
          onClick={() => setDisplayMode('month')}
        >
          Month
        </ToolbarButtonMonth>
        <ToolbarButtonDay type="button" onClick={() => setDisplayMode('day')}>
          Day
        </ToolbarButtonDay>
      </div>

      <MyApp />
    </ToolbarContainer>
  );
};
