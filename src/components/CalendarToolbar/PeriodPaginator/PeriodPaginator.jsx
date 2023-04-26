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
import { CalendarDataPicker } from '../CalendarDataPicker/CalendarDataPicker';
import { useNavigate } from 'react-router';
import { format } from 'date-fns';

export const PeriodPaginator = ({ today, prevHandler, nextHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  
  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const navigateToDate = newDate => {
  return `/calendar/day/${format(newDate, 'yyyy-MM-dd')}`;
  };

  const onChange = newDate => {
    navigate(navigateToDate(newDate));
    setDate(newDate);
    setIsOpen(!isOpen)
  };

  const onClose = evt => {
    if (evt.code === 'Escape' || evt.currentTarget === evt.target) {
      setIsOpen(false);
    }
  };

  return (
    <PeriodPaginatorWrapper onClick={onClose}>
      <PeriodPaginatorButton
        variant="outlined"
        type="button"
        onClick={handleClick}
      >
        <PeriodPaginatorSpan>{today.format('MMMM')}</PeriodPaginatorSpan>
        <PeriodPaginatorSpan>{today.format('Y')}</PeriodPaginatorSpan>
      </PeriodPaginatorButton>
      {isOpen ? (
        <CalendarDataPicker open={isOpen} onChange={onChange} value={date} />
      ) : null}
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
