import { ToolbarContainer } from './CalendatToolbar.styled';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import Icon from '../../images/icons.svg';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';


export const HeaderCalendar = ({ today, prevHandler, nextHandler }) => {
  return (
    <ToolbarContainer>
      <PeriodPaginator
        today={today}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        Icon={Icon}
      />
      <PeriodTypeSelect />
    </ToolbarContainer>
  );
};
