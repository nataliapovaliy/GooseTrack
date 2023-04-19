import styled from 'styled-components';

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
