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
