import { AddTaskBtnHead } from '../AddTaskBtn/AddTaskBtnHead';
import { TitleColumn, ColumnHeadWrapper } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ getTypeOfColumn, title, tasks }) => {
  return (
    <ColumnHeadWrapper>
      <TitleColumn>{title}</TitleColumn>
      <div>
        <AddTaskBtnHead
          tasks={tasks}
          getTypeOfColumn={getTypeOfColumn}
          title={title}
        />
      </div>
    </ColumnHeadWrapper>
  );
};
