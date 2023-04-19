import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 289px;
  height: calc(100vh - 24px);
  background-color: var(--sidebar-background-color);
  padding-left: 24px;
  padding-top: 32px;
  padding-bottom: 24px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const H2 = styled.h2`
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: var(--accent);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Image = styled.img`
  width: 64px;
  height: 60px;
  margin-right: 10px;
`;

export const H3 = styled.h3`
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #7e7d82;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 141px;
  height: 56px;
  margin-top: auto;
  background: var(--accent-background-color);
  border-radius: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: var(--btn-text-color);
  border: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  stroke: var(--inactive-btn-text-color);
  fill: none;
`;

export const SvgLogOut = styled.svg`
  width: 20px;
  height: 20px;
  margin-left: 11px;
  stroke: var(--btn-text-color);
  fill: none;
`;

export const Link = styled(NavLink)`
  width: 241px;
  height: 56px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--inactive-btn-text-color);
  text-decoration: none;
  &.active {
    background-color: var(--active-selection);
    color: var(--accent-color);
    ${Svg} {
      stroke: var(--accent-color);
    }
  }
`;

