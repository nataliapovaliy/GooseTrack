// import { useState } from 'react';
import {
  TaskCardWrapper,
  TaskCardDescription,
  TaskCardAvatar,
  TaskCardPriority,
  TaskDetailsWrapper,
  TaskAvatarPriorityWrapper,
} from './TaskColumnCard.styled';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
// import { TaskModal } from '../TaskModal/TaskModal';
// import { useSelector } from 'react-redux';
// import { getUserAvatar } from '../../redux/user/user-selectors';

export const TaskColumnCard = ({ task, getTask }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(prev => !prev);

  // console.log('isModalOpen :>> ', isModalOpen);
  // console.log('toggleModal :>> ', toggleModal);

  // const avatar = useSelector(getUserAvatar);
  const avatar = 'https://img.icons8.com/officel/32/null/avatar.png'; // временно для теста

  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength) + '...';
    }
  };

  const originalString = task.title;
  const maxLengthString = 31;

  const truncatedString = truncateString(originalString, maxLengthString);

  let priorityColor = '';
  if (task.priority === 'Low') {
    priorityColor = 'var(--task-low-color)';
  } else if (task.priority === 'Medium') {
    priorityColor = 'var(--task-med-color)';
  } else if (task.priority === 'High') {
    priorityColor = 'var(--task-high-color)';
  }

  return (
    <>
      <TaskCardWrapper>
        <TaskCardDescription>{truncatedString}</TaskCardDescription>
        <TaskDetailsWrapper>
          <TaskAvatarPriorityWrapper>
            <TaskCardAvatar src={avatar} alt="Avatar" />
            <TaskCardPriority style={{ backgroundColor: priorityColor }}>
              {task.priority}
            </TaskCardPriority>
          </TaskAvatarPriorityWrapper>
          <TaskToolbar getTask={getTask} task={task} />
        </TaskDetailsWrapper>
      </TaskCardWrapper>
    </>
  );
};
