import {
  PeriodPaginatorButton,
  PeriodPaginatorIcon,
  PeriodPaginatorInner,
  PeriodPaginatorLeft,
  PeriodPaginatorRight,
  PeriodPaginatorSpan,
  PeriodPaginatorWrapper,
} from './PeriodPaginator.styled';
import Icon from '../../../images/icons.svg';
import { CalendarPicker } from '../DataPicer/DataPicker';


export const PeriodPaginator = ({ today, prevHandler, nextHandler }) => {

  return (
    <PeriodPaginatorWrapper>
      <CalendarPicker />
      <PeriodPaginatorButton type="button" >
        <PeriodPaginatorSpan>{today.format('MMMM')}</PeriodPaginatorSpan>
        <PeriodPaginatorSpan>{today.format('Y')}</PeriodPaginatorSpan>
      </PeriodPaginatorButton>
      <PeriodPaginatorInner>
      <PeriodPaginatorLeft type="button" onClick={prevHandler}>
        <PeriodPaginatorIcon>
          <use href={`${Icon}#icon-chevron-right-new`} />
        </PeriodPaginatorIcon>
      </PeriodPaginatorLeft>
      <PeriodPaginatorRight type="button" onClick={nextHandler}>
        <PeriodPaginatorIcon>
          <use href={`${Icon}#icon-chevron-left-new`} />
        </PeriodPaginatorIcon>
      </PeriodPaginatorRight>
      </PeriodPaginatorInner>
    </PeriodPaginatorWrapper>
  );
};
