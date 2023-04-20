import styled from 'styled-components';

export const PeriodTypeSelectWrap = styled.div`
  /* display: flex; */
`;

export const PeriodTypeSelectButtonMonth = styled.button`
  padding: 8px 16px;
  /* width: 82px;
  height: 34px; */
  border: none;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  border-radius: 8px 0px 0px 8px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: var(--accent-color);
  background-color: #cae8ff;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: rgb(189 222 247);
  }
`;

export const PeriodTypeSelectButtonDay = styled.button`
  padding: 8px 26px;
  /* width: 82px;
  height: 34px; */
  border: none;
  border-radius: 0px 8px 8px 0px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: #3e85f3;
  background-color: #e3f3ff;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: rgb(189 222 247);
  }
`;
