import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:first-child) {
    margin-left: auto;
  }
`;

export const H2 = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: var(--title-text-main-color);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Motivation = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: var(--title-text-main-color);
`;

export const Image = styled.img`
  width: 64px;
  height: 60px;
  margin-right: 10px;
`;

export const Accent = styled.span`
  color: var(--accent);
`;

export const Svg = styled.svg`
  width: 34px;
  height: 34px;
  margin-right: 10px;
  stroke: var(--calendar-date-color);
  fill: none;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Overlay = styled.div`
  width: 289px;
  position: absolute;
  top: -40px;
  left: -32px;
  height: 100vh;
  background-color: white;
  z-index: 2;

  @media screen and (min-width: 768px) {
    /* max-width: 100%;
    width: 100vw;
    background-color: white;
    top: 0;
    left: 0; */
  }
`;