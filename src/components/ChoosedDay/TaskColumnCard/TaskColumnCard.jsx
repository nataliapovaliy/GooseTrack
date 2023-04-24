// import { useState } from 'react';
import {
  TaskCardWrapper,
  TaskCardDescription,
  TaskCardAvatar,
  TaskCardPriority,
  TaskDetailsWrapper,
  TaskAvatarPriorityWrapper,
  AvatarLetter,
  AvatarImg,
} from './TaskColumnCard.styled';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
// import { TaskModal } from '../TaskModal/TaskModal';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectUser } from 'redux/auth/auth-selectors';

const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + '...';
  }
};

const choosePriorityColor = priority => {
  if (priority === 'Low') {
    return 'var(--task-low-color)';
  }
  if (priority === 'Medium') {
    return 'var(--task-med-color)';
  }
  if (priority === 'High') {
    return 'var(--task-high-color)';
  }
};

export const TaskColumnCard = ({ task, getTask }) => {
  const { title, priority } = task;
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(prev => !prev);

  // console.log('isModalOpen :>> ', isModalOpen);
  // console.log('toggleModal :>> ', toggleModal);
  const isLoading = useSelector(selectIsLoading);
  const userSelector = useSelector(selectUser);
  const name = userSelector.user?.name || 'Name';
  const avatar = userSelector.user?.avatarURL;
  const firstLetter = name.trim().slice(0, 1).toUpperCase();
  // const avatar = 'https://img.icons8.com/officel/32/null/avatar.png'; // временно для теста

  const originalString = title;
  const maxLengthString = 31;

  const truncatedString = truncateString(originalString, maxLengthString);
  const priorityColor = choosePriorityColor(priority);

  return (
    <>
      <TaskCardWrapper>
        <TaskCardDescription>{truncatedString}</TaskCardDescription>
        <TaskDetailsWrapper>
          <TaskAvatarPriorityWrapper>
            <TaskCardAvatar>
              {isLoading ? (
                <AvatarLetter>{firstLetter}</AvatarLetter>
              ) : avatar === null ? (
                <AvatarLetter>{firstLetter}</AvatarLetter>
              ) : (
                <AvatarImg src={avatar} alt="Avatar" />
              )}
            </TaskCardAvatar>
            <TaskCardPriority style={{ backgroundColor: priorityColor }}>
              {priority}
            </TaskCardPriority>
          </TaskAvatarPriorityWrapper>
          <TaskToolbar getTask={getTask} task={task} />
        </TaskDetailsWrapper>
      </TaskCardWrapper>
    </>
  );
};
