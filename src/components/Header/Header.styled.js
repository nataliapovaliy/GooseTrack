import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 64px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
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
  width: 24px;
  height: 24px;
  stroke: var(--calendar-date-color);
  fill: none;
  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Overlay = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  left: ${({ isVisible }) => (isVisible ? '0' : '-100%')};
  height: 100vh;
  background-color: rgba(47, 48, 58, 0.4);
  z-index: 2;
  overflow: hidden;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)}; 
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, left 0.3s ease-in-out;
`;