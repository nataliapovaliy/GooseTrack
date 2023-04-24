import { TaskItem } from '../CalendarTable.styled';

export const CalendarTaskDay = ({ task }) => {
  // console.log(task);

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

  return (
    <TaskItem
      style={{ backgroundColor: priorityColor, color: priorityTextColor }}
    >
      {task.title}
    </TaskItem>
  );
};
