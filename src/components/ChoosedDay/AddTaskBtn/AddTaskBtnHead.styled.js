import styled from 'styled-components';

export const AddTaskBtnStyled = styled.button`
  position: absolute;
  top: 27px;
  right: 25px;
  padding: 0px;
  margin: 0px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: var(--title-text-main-color);
  /* fill: #111111; */
  &:hover {
    stroke: var(--accent);
  }
`;
