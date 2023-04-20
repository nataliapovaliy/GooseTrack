import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const H3 = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #7e7d82;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 17px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
      margin-bottom: 16px;
    }
    @media screen and (min-width: 1440px) {
      margin-bottom: 16px;
    }
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  stroke: var(--inactive-btn-text-color);
  fill: none;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

export const Link = styled(NavLink)`
  font-family: 'Inter';
  font-style: normal;
  width: 185px;
  height: 40px;
  padding-left: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  display: flex;
  align-items: center;
  border-radius: 8px;
  color: var(--inactive-btn-text-color);
  text-decoration: none;
  &.active {
    background-color: var(--active-selection);
    color: var(--accent-color);
    ${Svg} {
      stroke: var(--accent-color);
    }
  }

  @media screen and (min-width: 768px) {
    width: 225px;
    height: 56px;
    padding-left: 20px;
    font-size: 16px;
    line-height: 19px;
  }
  @media screen and (min-width: 1440px) {
    width: 241px;
    height: 56px;
    padding-left: 20px;
    font-size: 16px;
    line-height: 19px;
  }
`;