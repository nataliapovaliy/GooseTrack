import styled  from 'styled-components';

export const TasksListWrapper = styled.div`
  display: flex;
  flex-direction: column;
 
  width: 100%;
  height: 100%;
margin-left: 21px;
  max-height: 376px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: #f2f2f2;
  ::-webkit-scrollbar-corner {
    background: #f2f2f2;
    border-radius: 12px;
    }
  &::-webkit-scrollbar {
    display: true;
  }
`;
