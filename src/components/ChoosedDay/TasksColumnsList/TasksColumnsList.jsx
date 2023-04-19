//  блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done).
// На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера.


// import { useSelector } from 'react-redux';
import { TasksColumn } from '../TasksColumn/TasksColumn';
import { TasksColumnsListWrapper } from './TasksColumnsList.styled';
import { tasksData } from '../taskData';
// import { getTasks } from '../../redux/tasks/tasks-selectors';


export const TasksColumnsList = () => {
 
    // const tasks = useSelector(getTasks);
    const tasks = tasksData;

const filterTodo = tasks.filter(task => task.status === 'todo');
const filterInProgress = tasks.filter(task => task.status === 'In progress');
const filterDone = tasks.filter(task => task.status === 'done');

    return (
      <TasksColumnsListWrapper>
        <TasksColumn title={'To do'} tasks={filterTodo} />
        <TasksColumn title={'In progress'} tasks={filterInProgress} />
        <TasksColumn title={'Done'} tasks={filterDone} />
      </TasksColumnsListWrapper>
    );
}

