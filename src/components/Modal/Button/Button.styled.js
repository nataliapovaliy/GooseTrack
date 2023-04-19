import styled from 'styled-components';

export const StyledButton = styled.button`
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
`;

export const ItemWraper = styled.div`
  position: relative;
  transform: rotate(-45deg);
  right: 14px;
  top: -25px;
`;
