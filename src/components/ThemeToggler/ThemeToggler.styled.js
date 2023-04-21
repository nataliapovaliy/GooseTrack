import styled from 'styled-components';

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const Svg = styled.svg`
  display: flex;
  align-items: center;
  width: 19px;
  height: 19px;
  margin-right: 14px;
  fill: var(--accent-color);
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;