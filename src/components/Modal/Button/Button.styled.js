import styled from 'styled-components';

export const StyledButton = styled.button`
  transition: all 0.3s;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${props => props.bcg};
  color: ${props => props.color};
  border: none;
  padding: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  &:hover {
    border: 1px solid #42b8cc;
  }
  &:active {
    filter: blur(0.1rem);
  }
`;

export const ItemWraper = styled.div`
  position: relative;
  transform: rotate(-45deg);
  right: 14px;
  top: -25px;
`;
