import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
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
  position: relative;
  &:not(:last-child) {
    margin-right: auto;}
`;

export const Image = styled.img`
  width: 64px;
  height: 60px;
  margin-right: 10px;
`;

export const Accent = styled.span`
  color: var(--accent);
`;

export const Name = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: var(--calendar-date-color);
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-left: 14px;
  border: 1.8px solid var(--accent);
  background-color: var(--outlet-background-color);
  justify-content: center;
`;

export const AvatarLetter = styled.span`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: var(--accent);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;