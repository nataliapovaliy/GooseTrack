import styled from 'styled-components';

export const PeriodPaginatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  border-radius: 8px;
  /* background-color: var(--main-background-color); */
  margin-bottom: 14px;
  /* padding: 14px; */
`;

export const PeriodPaginatorButton = styled.button`
  display: flex;
  width: 170px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  background-color: var(--accent-background-color);
  cursor: pointer;
`;

export const PeriodPaginatorSpan = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1, 12;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;

export const PeriodPaginatorLeft = styled.button`
  padding: 8px 10px;

  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px 0px 0px 8px;
  background-color: var(--main-background-color);
  cursor: pointer;
`;

export const PeriodPaginatorRight = styled.button`
  padding: 8px 10px;

  border: 1px solid rgba(220, 227, 229, 0.8);

  border-radius: 0px 8px 8px 0px;
  background-color: var(--main-background-color);
  cursor: pointer;
`;

export const PeriodPaginatorIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: #dce3e5;
  stroke: #dce3e5;
  :active {
    fill: #616161;
  }
  :hover {
    fill: #616161;
    stroke: #616161;
  }
  :focus {
    fill: #616161;
  }
`;
