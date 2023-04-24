import { AddTaskBtnHead } from '../AddTaskBtn/AddTaskBtnHead';
import { TitleColumn, ColumnHeadWrapper } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ getTypeOfColumn, title, tasks, date }) => {
//  console.log('ColumnHeadBar', date);
  return (
    <ColumnHeadWrapper>
      <TitleColumn>{title}</TitleColumn>
      <div>
        <AddTaskBtnHead
          
          tasks={tasks}
          getTypeOfColumn={getTypeOfColumn}
          title={title}
          date={date}
        />
      </div>
    </ColumnHeadWrapper>
  );
};
