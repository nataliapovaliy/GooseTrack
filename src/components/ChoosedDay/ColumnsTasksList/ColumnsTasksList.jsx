import { TaskColumnCard } from '../TaskColumnCard/TaskColumnCard';
import { TasksListWrapper } from './ColumnsTasksList.styled';

export const ColumnsTasksList = ({ tasks, getTask }) => {
  return (
    <TasksListWrapper>
      {tasks.map(task => (
        <TaskColumnCard task={task} key={task._id} getTask={getTask} />
      ))}
    </TasksListWrapper>
  );
};
