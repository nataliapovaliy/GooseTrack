import styled from "styled-components";

export const TaskCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
    height: 112px;
    padding: 14px 10px 0px 14px;
    background: #F7F6F9;
border: 1px solid rgba(220, 227, 229, 0.8);
border-radius: 8px;
 margin-bottom: 18px;

`;

export const TaskCardDescription = styled.div`
    
    width: 100%;
    height: 100%;
    padding: 14px 10px 0px 14px;
 
`;
export const TaskCardAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0px 8px 0px 0px;
`;
export const TaskCardPriority = styled.div`
  width: 63px;
  height: 20px;
  width: 32px;
  height: 32px;
  padding: 4px 12px 4px 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  /* margin: 0px 18px 0px 14px; */
`;

export const TaskDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0px 0px 18px 0px;
  justify-content: space-around;
`;


