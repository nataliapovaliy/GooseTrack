// "1. Компонент отримує в пропсах id групи завдань
// 2. Компонент рендерить блок розмітки кнопки.
// 3. Клік по кнопці відкриває модалку TaskModal для створення нового завдання в поточній колонці"
import { openModalAddTask } from '../../../redux/modal/globalSlice';
import { useDispatch } from 'react-redux';

import {
  AddTaskBtnStyled,
  AddTaskBtnTextStyled,
  Svg,
} from './AddTaskBtn.styled';
import icon from '../../../images/icons.svg';

export const AddTaskBtn = ({ groupId }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openModalAddTask());
  };

  return (
    <>
      <AddTaskBtnStyled onClick={openModal}>
        <Svg>
          <use xlinkHref={icon + '#icon-plus-add-button'}></use>
        </Svg>{' '}
        <AddTaskBtnTextStyled>Add task</AddTaskBtnTextStyled>
      </AddTaskBtnStyled>
    </>
  );
};
