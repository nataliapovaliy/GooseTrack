// "1. Компонент отримує в пропсах id групи завдань
// 2. Компонент рендерить блок розмітки кнопки.
// 3. Клік по кнопці відкриває модалку TaskModal для створення нового завдання в поточній колонці"

import { useState } from 'react';
import {
  AddTaskBtnStyled,
  AddTaskBtnIconStyled,
  AddTaskBtnTextStyled,
  Svg,
} from './AddTaskBtn.styled';
import icon from '../../../images/icons.svg';
// import { TaskModal } from '../TaskModal/TaskModal';

export const AddTaskBtn = ({ groupId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(prev => !prev);
  console.log('AddTaskBtnIconStyled :>> ', AddTaskBtnIconStyled);
  console.log('isModalOpen :>> ', isModalOpen);

  return (
    <>
      <AddTaskBtnStyled onClick={toggleModal}>
        <Svg>
          <use xlinkHref={icon + '#icon-plus-add-button'}></use>
        </Svg>{' '}
        <AddTaskBtnTextStyled>Add task</AddTaskBtnTextStyled>
      </AddTaskBtnStyled>
      {/* {isModalOpen && <TaskModal groupId={groupId} toggleModal={toggleModal} />} */}
    </>
  );
};
