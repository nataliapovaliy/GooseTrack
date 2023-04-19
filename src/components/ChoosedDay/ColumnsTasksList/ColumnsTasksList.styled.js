import styled from 'styled-components';

export const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 315px;
  height: 100%;
  margin-left: 21px;
  max-height: 376px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--main-background-color);
  scrollbar-color: #f2f2f2;
  ::-webkit-scrollbar-corner {
    /* background: #f2f2f2; */
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 376px;
    display: true;
    background: #f2f2f2;
    border-radius: 12px;
    
  }
`;
