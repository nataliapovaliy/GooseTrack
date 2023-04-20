import { PeriodPaginatorButton, PeriodPaginatorIcon, PeriodPaginatorLeft, PeriodPaginatorRight, PeriodPaginatorSpan, PeriodPaginatorWrapper } from "./PeriodPaginator.styled"
import Icon from '../../../images/icons.svg';

export const PeriodPaginator = ({today,
  prevHandler,
  nextHandler}) => {
    return(
       
        <PeriodPaginatorWrapper>
        <PeriodPaginatorButton type="button">
          <PeriodPaginatorSpan>{today.format('MMMM')}</PeriodPaginatorSpan>
          <PeriodPaginatorSpan>{today.format('Y')}</PeriodPaginatorSpan>
        </PeriodPaginatorButton>
        <PeriodPaginatorLeft type="button" onClick={prevHandler}>
          <PeriodPaginatorIcon>
            <use href={`${Icon}#icon-chevron-right-new`} />
          </PeriodPaginatorIcon>
        </PeriodPaginatorLeft>
        <PeriodPaginatorRight type="button" onClick={nextHandler}>
          <Icon>
            {' '}
            <use href={`${Icon}#icon-chevron-left-new`} />
          </Icon>
        </PeriodPaginatorRight>
      </PeriodPaginatorWrapper>
        
    )
}