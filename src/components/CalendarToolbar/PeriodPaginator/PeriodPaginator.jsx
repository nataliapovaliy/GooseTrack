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
import { useState } from 'react';
import DatePicker from 'sassy-datepicker';
import './DataPicker.css';

export const PeriodPaginator = ({ today, prevHandler, nextHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setIsOpen(true);
  };
  console.log(handleClick);

  return (
    <PeriodPaginatorWrapper>
      <DatePicker open={isOpen} weekStartsFrom="Monday" />
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
