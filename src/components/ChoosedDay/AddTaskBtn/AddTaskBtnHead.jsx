// "1. Компонент отримує в пропсах id групи завдань
// 2. Компонент рендерить блок розмітки кнопки.
// 3. Клік по кнопці відкриває модалку TaskModal для створення нового завдання в поточній колонці"

import { AddTaskBtnStyled, Svg } from './AddTaskBtnHead.styled';

import icon from '../../../images/icons.svg';
import { useDispatch } from 'react-redux';
import { openModalAddTask } from 'redux/modal/globalSlice';

export const AddTaskBtnHead = ({ groupId }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openModalAddTask());
  };

  return (
    <>
      <AddTaskBtnStyled onClick={openModal}>
        <Svg>
          <use xlinkHref={icon + '#icon-add-button-round'}></use>
        </Svg>
      </AddTaskBtnStyled>
    </>
  );
};
