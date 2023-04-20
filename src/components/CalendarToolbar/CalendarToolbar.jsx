import {
  ToolbarButtonDay,
  ToolbarButtonMonth,
  ToolbarContainer,
} from './CalendatToolbar.styled';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import Icon from '../../images/icons.svg';

export const HeaderCalendar = ({  today,  prevHandler,  nextHandler,  setDisplayMode,}) => {
  
  return (
    <ToolbarContainer>
      
<PeriodPaginator  today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}  Icon={Icon}/>

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
    </ToolbarContainer>
  );
};
