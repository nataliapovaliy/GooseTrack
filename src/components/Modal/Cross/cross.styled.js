import styled from 'styled-components';

export const ModalCloseWraper = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  right: 19px;
  top: 19px;
`;
export const CloseLeft = styled.div`
  position: absolute;
  width: 2px;
  height: ${props => props.height};
  background-color: var(${props => props.bcgCr});
  background-color: ${props => props.bcgCr};
  right: 4px;
  top: -2px;
  border-radius: 1px;
  transform: translate(-50%, -50%);
  transform: rotate(-45deg);
`;
export const CloseRight = styled.div`
  position: absolute;
  width: 2px;
  height: ${props => props.height};
  background-color: var(${props => props.bcgCr});
  background-color: ${props => props.bcgCr};
  right: 4px;
  top: -2px;
  border-radius: 1px;
  transform: translate(-50%, -50%);
  transform: rotate(45deg);
`;
