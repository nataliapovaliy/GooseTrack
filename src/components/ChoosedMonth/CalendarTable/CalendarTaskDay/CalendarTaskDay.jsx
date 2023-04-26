// import { ChoosedDay } from 'components/ChoosedDay/ChoosedDay';
import { useNavigate } from 'react-router-dom';
import { TaskItem } from '../CalendarTable.styled';

export const CalendarTaskDay = ({ task }) => {
  // console.log(task);
  const navigate = useNavigate();
  let priorityColor = '';
  let priorityTextColor = '';

  if (task.priority === 'Low') {
    priorityColor = 'var(--priority-low-color)';
    priorityTextColor = 'var(--task-low-color)';
  } else if (task.priority === 'Medium') {
    priorityColor = 'var(--priority-med-color)';
    priorityTextColor = 'var(--task-med-color)';
  } else if (task.priority === 'High') {
    priorityColor = 'var(--priority-high-color)';
    priorityTextColor = 'var(--task-high-color)';
  }
  const handleTaskItemClick = () => {
    navigate(`/calendar/day/${task.createAt}`); 
  };
  return (
    <TaskItem
      type="button"
      onClick={handleTaskItemClick} 
      style={{ backgroundColor: priorityColor, color: priorityTextColor }}
    >
      {task.title}
    </TaskItem>
  );
};
