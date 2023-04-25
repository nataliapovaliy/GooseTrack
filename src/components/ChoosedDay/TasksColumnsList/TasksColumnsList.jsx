// import { useSelector } from 'react-redux';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListWrapper } from './TasksColumnsList.styled';
// import { getTasks } from '../../redux/tasks/tasks-selectors';

export const TasksColumnsList = ({ tasks, getTypeOfColumn, getTask }) => {
  const filterTodo = tasks.filter(task => task.status === 'To do');
  const filterInProgress = tasks.filter(task => task.status === 'In progress');
  const filterDone = tasks.filter(task => task.status === 'Done');

  return (
    <TasksColumnsListWrapper>
      <TasksColumn
        title={'To do'}
        tasks={filterTodo}
        getTypeOfColumn={getTypeOfColumn}
        getTask={getTask}
      />
      <TasksColumn
        title={'In progress'}
        tasks={filterInProgress}
        getTypeOfColumn={getTypeOfColumn}
        getTask={getTask}
      />
      <TasksColumn
        title={'Done'}
        tasks={filterDone}
        getTypeOfColumn={getTypeOfColumn}
        getTask={getTask}
      />
    </TasksColumnsListWrapper>
  );
};
