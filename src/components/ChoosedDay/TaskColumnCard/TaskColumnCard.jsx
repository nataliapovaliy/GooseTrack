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

const choosePriorityBackgroundColor = priority => {
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
const choosePriorityTextColor = priority => {
  if (priority === 'Low') {
    return 'var(--text-priority-other-color)';
  }
  if (priority === 'Medium') {
    return 'var(--text-priority-other-color)';
  }
  if (priority === 'High') {
    return 'var(--text-priority-high-color)';
  }
};

export const TaskColumnCard = ({ task, getTask }) => {
  const { title, priority } = task;

  const isLoading = useSelector(selectIsLoading);
  const userSelector = useSelector(selectUser);
  const name = userSelector.user?.name || 'Name';
  const avatar = userSelector.user?.avatarURL;
  const firstLetter = name.trim().slice(0, 1).toUpperCase();

  const originalString = title;
  const maxLengthString = 31;

  const truncatedString = truncateString(originalString, maxLengthString);
  const priorityBackgroundColor = choosePriorityBackgroundColor(priority);
  const priorityTextColor = choosePriorityTextColor(priority);

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
            <TaskCardPriority style={{ backgroundColor: priorityBackgroundColor, color: priorityTextColor, }}>
              {priority}
            </TaskCardPriority>
          </TaskAvatarPriorityWrapper>
          <TaskToolbar getTask={getTask} task={task} />
        </TaskDetailsWrapper>
      </TaskCardWrapper>
    </>
  );
};
