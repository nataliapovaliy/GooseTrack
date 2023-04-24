import { AddTaskBtnStyled, Svg } from './AddTaskBtnHead.styled';
import icon from '../../../images/icons.svg';
import { useDispatch } from 'react-redux';
import { openModalAddTask } from 'redux/modal/globalSlice';

export const AddTaskBtnHead = ({ title, getTypeOfColumn, tasks, date }) => {
  const dispatch = useDispatch();

  const openModal = () => {
    console.log('openModal DATE', date );
    dispatch(openModalAddTask());
    getTypeOfColumn({ status: title });
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
