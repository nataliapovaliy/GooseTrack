import styled from 'styled-components';

export const PeriodPaginatorWrapper = styled.div`
position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 18px;
  border: none;
  @media screen and (min-width: 768px) {
    align-items: center;
    margin-bottom: 14px;
  }
`;

export const PeriodPaginatorButton = styled.button`
  display: flex;
  width: 130px;
  height: 30px;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  background-color: var(--accent-background-color);
  cursor: pointer;
  &:hover {
    border: 1px solid #42b8cc;
  }
  &:active {
    filter: blur(0.1rem);
  }
  @media screen and (min-width: 768px) {
    display: flex;
    width: 170px;
    height: 34px;
    gap: 8px;

    padding: 8px 12px;
    margin-right: 8px;
    margin-bottom: 0;
  }
`;

export const PeriodPaginatorSpan = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28;
  text-align: center;
  text-transform: uppercase;
  color: var(--btn-text-color);
  padding: 0;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const PeriodPaginatorInner = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;

export const PeriodPaginatorLeft = styled.button`
  display: flex;
  padding: 11px 16px;
  height: 30px;
  border: 1px solid rgba(220, 227, 229, 0.8);

  border-radius: 8px 0px 0px 8px;
  background-color: var(--main-background-color);
  cursor: pointer;
  
  @media screen and (min-width: 768px) {
    padding: 8px 10px;
    height: 34px;
  }
`;

export const PeriodPaginatorRight = styled.button`
  display: flex;
  padding: 11px 16px;
  height: 30px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  border: 1px solid rgba(220, 227, 229, 0.8);

  border-radius: 0px 8px 8px 0px;
  background-color: var(--main-background-color);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 8px 10px;
    height: 34px;
  }
`;

export const PeriodPaginatorIcon = styled.svg`
  width: 10px;
  height: 10px;
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
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  /* max-width: 320px; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
    /* background-color: white; */

  /* background-color: rgba(0, 0, 0, 0.25); */
  z-index: 1200;
  
  @media screen and (min-width: 768px) {
    max-width: 100%;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.05);
    top: 0;
  left: 0;
  }
`;
