import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  background-color: var(--sidebar-background-color);
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 289px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 289px;
    padding-left: 24px;
    padding-top: 32px;
    border-right: solid 1px var(--frame-border-color);
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  font-family: 'Coolvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--accent);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const Image = styled.img`
  width: 36px;
  height: 35px;
  margin-right: 6px;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 58px;
    margin-right: 6px;
  }
  @media screen and (min-width: 1440px) {
    width: 64px;
    height: 60px;
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  width: 131px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  background: var(--accent-background-color);
  border-radius: 16px;
  color: var(--btn-text-color);
  border: none;

  &:hover {
    border: 1px solid #42b8cc;
  }
  &:active {
    filter: blur(0.1rem);
  }

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
    width: 141px;
    height: 56px;
  }
  @media screen and (min-width: 1440px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.02em;
    width: 141px;
    height: 56px;
  }
`;

export const SvgLogOut = styled.svg`
  width: 18px;
  height: 18px;
  margin-left: 6px;
  stroke: var(--btn-text-color);
  fill: none;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin-left: 11px;
  }
  @media screen and (min-width: 1440px) {
    width: 20px;
    height: 20px;
    margin-left: 11px;
  }
`;

export const SvgClose = styled.svg`
  width: 12px;
  height: 12px;
  margin-left: auto;
  stroke: var(--title-text-main-color);
  fill: none;
  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;