// import { useState } from 'react';
import { TaskToolbarStyled, TaskToolbarBtn, Svg } from './TaskToolbar.styled';

import iconTrash from '../../../images/icons.svg';
import { useDispatch } from 'react-redux';
import {
  openModalUpDateTask,
  openModalConfirmation,
} from 'redux/modal/globalSlice';
// import { deleteTask } from '../../redux/tasks/tasks-operations';
// import { toast } from 'react-toastify';
// import { TaskModal } from '../TaskModal/TaskModal';
// import { TaskModalContext } from '../../context/TaskModalContext';

export const TaskToolbar = ({ task, getTask }) => {
  // const [IsModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(prev => !prev);

  // const dispatch = useDispatch();
  // console.log('isModalOpen :>> ', isModalOpen);

  // const handleDeleteTask = () => {
  //   console.log('delete task');
  // dispatch(deleteTask(task.id))
  //     .then(() => toast.success('taskDeleted'))
  //     .catch(() => toast.error('taskDeleteError'));
  // };

  const dispatch = useDispatch();

  const openModal = id => {
    dispatch(openModalUpDateTask());

    getTask(task);
  };

  const confirmationOpen = id => {
    dispatch(openModalConfirmation());
    getTask(task);
  };

  return (
    <>
      <TaskToolbarStyled>
        <TaskToolbarBtn>
          <Svg>
            <use xlinkHref={iconTrash + '#icon-round-arrow'}></use>
          </Svg>
        </TaskToolbarBtn>
        <TaskToolbarBtn onClick={() => openModal(task._id)}>
          <Svg>
            <use xlinkHref={iconTrash + '#icon-pencil'}></use>
          </Svg>
        </TaskToolbarBtn>

        <TaskToolbarBtn onClick={confirmationOpen}>
          <Svg>
            <use xlinkHref={iconTrash + '#icon-trash'}></use>
          </Svg>
        </TaskToolbarBtn>
      </TaskToolbarStyled>
      {/* {isModalOpen && (
                <TaskModalContext.Provider value={{ task, toggleModal }}>
                    <TaskModal />
                </TaskModalContext.Provider>
            )} */}
    </>
  );
};
