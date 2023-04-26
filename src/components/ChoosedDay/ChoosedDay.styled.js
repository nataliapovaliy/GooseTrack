import styled from 'styled-components';

export const TasksColumnsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  width: 100%;
  /* height: 100%; */
  /* padding: 0 20px; */
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 704px;
    height: 14px;
    display: true;
    background: var(--outlet-background-color);
    border-radius: 12px;
    transform: rotate(-90deg);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--scroll-color);
    border-radius: 12px;
  }
`;
