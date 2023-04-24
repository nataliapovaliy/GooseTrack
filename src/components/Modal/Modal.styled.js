import styled from 'styled-components';

export const ModalBody = styled.div`
  position: absolute;
  background-color: var(--modal-background-color);
  z-index: 2;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 40px 28px;
  border: 1px solid var(--modal-background-color);
`;
