import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const H2 = styled.h2`
  margin-right: auto;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: var(--title-text-main-color);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const Motivation = styled.span`
  margin-right: auto;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: var(--title-text-main-color);
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  position: relative;
`;

export const Image = styled.img`
  width: 64px;
  height: 60px;
  margin-right: 10px;
`;

export const Accent = styled.span`
  color: var(--accent);
`;