import { openModalAddTask } from '../../../redux/modal/globalSlice';
import { useDispatch } from 'react-redux';

import {
  AddTaskBtnStyled,
  AddTaskBtnTextStyled,
  Svg,
} from './AddTaskBtn.styled';
import icon from '../../../images/icons.svg';

export const AddTaskBtn = ({ taskObjectFormation, title }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    taskObjectFormation({ status: title });
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
