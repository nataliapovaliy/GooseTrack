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

export const DivOverlay = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  /* left: ${({ isVisible }) => (isVisible ? '0' : '-100%')}; */
  left: '0';
  height: 100vh;
  background-color: rgba(47, 48, 58, 0.4);
  z-index: 2;
  overflow: hidden;
  /* opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};  */
  opacity: 1;
  /* visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')}; */
  visibility: 'visible';
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,
    left 0.3s ease-in-out;
`;
