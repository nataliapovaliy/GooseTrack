import {
 
  Overlay,
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
import { useDispatch } from 'react-redux';

export const PeriodPaginator = ({ today, prevHandler, nextHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const onClose = evt => {
    if (evt.code === 'Escape' || evt.currentTarget === evt.target) {
      dispatch(setIsOpen(false));
    }
  };
  
  console.log(handleClick);

  return (
    <PeriodPaginatorWrapper>
      
      <PeriodPaginatorButton type="button" onClick={handleClick} >
        <PeriodPaginatorSpan>{today.format('MMMM')}</PeriodPaginatorSpan>
        <PeriodPaginatorSpan>{today.format('Y')}</PeriodPaginatorSpan>
      </PeriodPaginatorButton>
      {
        isOpen ? (<Overlay onClick={onClose}><DatePicker open={isOpen}
        
        weekStartsFrom="Monday"   
        /> </Overlay>) : null
      
      }
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
