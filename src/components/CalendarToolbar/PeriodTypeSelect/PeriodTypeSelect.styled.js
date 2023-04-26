import styled from 'styled-components';

export const PeriodTypeSelectWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const PeriodTypeSelectButtonMonth = styled.button`
  padding: 8px 16px;
  border: none;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  border-radius: 8px 0px 0px 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  color: var(--accent-color);
  background-color: var(--background-button-month);
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: rgb(189 222 247);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const PeriodTypeSelectButtonDay = styled.button`
  padding: 8px 26px;
  border: none;
  border-radius: 0px 8px 8px 0px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
  color: #3e85f3;
  background-color: var(--background-button-day);
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: rgb(189 222 247);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;
