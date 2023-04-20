import { AddTaskBtnHead } from '../AddTaskBtn/AddTaskBtnHead';
import { TitleColumn, ColumnHeadWrapper } from './ColumnHeadBar.styled';

export const ColumnHeadBar = ({ title, tasks }) => {
   
    return (
      <ColumnHeadWrapper>
        <TitleColumn>{title}</TitleColumn>
        <div>
          <AddTaskBtnHead tasks={tasks} />
        </div>
      </ColumnHeadWrapper>
    );
   
}
