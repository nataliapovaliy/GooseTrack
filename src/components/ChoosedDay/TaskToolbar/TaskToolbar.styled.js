import styled from 'styled-components';

export const TaskToolbarStyled = styled.div`
  display: flex;
  position: absolute;
  right: 15px;
  top: 75px;
  gap: 15px;
  flex-direction: row;
  margin: 0 px 0px 0px 0px;
  background-color: none;
  border-bottom: none;
`;

export const TaskToolbarBtn = styled.button`
  padding: 0px;
  margin: 0px;
  border: none;
  background: none;
  cursor: pointer;
`;
export const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: transparent;
  stroke: var(--title-text-main-color);
  &:hover {
    stroke: var(--accent);
  }
`;

export const TaskModalChangeStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  justify-content: center;
  gap: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--modal-background-color);
  border-radius: 5px;
  /* padding: 20px; */
  width: 147px;
  height: 90px;
  z-index: 100;

`;

export const TaskModalChangeStatusBtn = styled.button`
  display: flex;
  align-items: start;
  justify-content: space-around;

  
  padding: 0px;
  margin: 0px;
  border: none;
  background: none;
  cursor: pointer;
  color: var(--title-text-main-color);
  &:hover {
    color: var(--accent);
  }
`;

export const StateStatus = styled.div`
margin: 0px 10px 0px 0px;
  padding: 0px 0px 0px 0px;
  
  `;
