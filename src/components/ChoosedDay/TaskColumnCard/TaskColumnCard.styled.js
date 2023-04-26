import styled from 'styled-components';

export const TaskCardWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 112px;
  padding: 14px 10px 0px 14px;
  background: var(--outlet-background-color);
  border: 1px solid var(--task-border-color);
  border-radius: 8px;
`;

export const TaskCardDescription = styled.div`
  width: 100%;
  height: 100%;
  color: var(--title-text-main-color);
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin: 0px 0px 30px 0px;
`;
export const TaskCardAvatar = styled.div`
 display: flex;
  align-items: center;
   justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0px 8px 0px 0px;
  border: 1.8px solid var(--accent);
`;
export const TaskCardPriority = styled.div`
  width: 63px;
  height: 20px;

  padding: 4px 12px 4px 12px;
  /* font-family: 'Inter'; */
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  border-radius: 4px;
  text-align: center;
  /* color: #F7F6F9; */

  /* margin: 0px 18px 0px 14px; */
`;
export const TaskAvatarPriorityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  /* justify-content: space-between; */
  /* width: 100%; */


  margin: 0px 0px 18px 0px;
  /* justify-content: space-around; */
`;
export const AvatarLetter = styled.span`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* font-style: normal; */
  font-weight: 700;
  font-size: 24px;
  /* padding: 0px 0px 0px 7px; */
  color: var(--accent);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 25px;

  }
  @media screen and (min-width: 1440px) {
  }
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const TaskDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  /* margin: 0px 0px 18px 0px; */
  /* justify-content: space-around; */
`;
