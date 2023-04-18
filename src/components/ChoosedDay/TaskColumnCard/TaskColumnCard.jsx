// "1. Компонент отримує в пропсах дані необхідні для створення картки.
// 2. Компонент підписаний на url аватару юзера
// 3. Компонент рендерить блоки:
//  - розмітку з описом завдання, який має фіксовану висоту і текст з описом, якщо той не вміщається, обрізається та показуються три крапки.
//  - аватар юзера.
//  - пріоритет завдання, з фоном відповідного кольору.
//  - TaskToolbar - інетрфейс для роботи з карткою
//  - TaskModal - модалка з формою для редагування завдання."

import { useState } from 'react';
import {
  TaskCardWrapper,
  TaskCardDescription,
  TaskCardAvatar,
  TaskCardPriority,
  TaskDetailsWrapper,
} from './TaskColumnCard.styled';
import { TaskToolbar } from '../TaskToolbar/TaskToolbar';
// import { TaskModal } from '../TaskModal/TaskModal';
// import { useSelector } from 'react-redux';
// import { getUserAvatar } from '../../redux/user/user-selectors';

export const TaskColumnCard = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(prev => !prev);

  console.log('isModalOpen :>> ', isModalOpen);
    console.log('toggleModal :>> ', toggleModal);

  // const avatar = useSelector(getUserAvatar);
  const avatar = 'https://img.icons8.com/officel/32/null/avatar.png'; // временно для теста

  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength) + '...';
    }
  };

  const originalString = task.description;
  const maxLengthString = 31;

  const truncatedString = truncateString(originalString, maxLengthString);

  let priorityColor = '';
  if (task.priority === 'Low') {
    priorityColor = '#72C2F8';
  } else if (task.priority === 'Medium') {
    priorityColor = '#F3B249';
  } else if (task.priority === 'High') {
    priorityColor = '#EA3D65';
  }

  return (
    <>
      <TaskCardWrapper>
        <TaskCardDescription>{truncatedString}</TaskCardDescription>
        <TaskDetailsWrapper>
          <TaskCardAvatar src={avatar} alt="Avatar" />
          <TaskCardPriority style={{ backgroundColor: priorityColor }}>
            {task.priority}
          </TaskCardPriority>
          <TaskToolbar />
        </TaskDetailsWrapper>
      </TaskCardWrapper>
    </>
  );
};
