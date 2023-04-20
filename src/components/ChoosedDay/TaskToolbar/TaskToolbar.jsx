import { useState } from 'react';
import { TaskToolbarStyled, TaskToolbarBtn, Svg } from './TaskToolbar.styled';

import iconTrash from '../../../images/icons.svg';
import { useDispatch } from 'react-redux';
import { openModalUpDateTask } from 'redux/modal/globalSlice';
// import { deleteTask } from '../../redux/tasks/tasks-operations';
// import { toast } from 'react-toastify';
// import { TaskModal } from '../TaskModal/TaskModal';
// import { TaskModalContext } from '../../context/TaskModalContext';

export const TaskToolbar = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(prev => !prev);

  // const dispatch = useDispatch();
  // console.log('isModalOpen :>> ', isModalOpen);

  const handleDeleteTask = () => {
    console.log('delete task');
    // dispatch(deleteTask(task.id))
    //     .then(() => toast.success('taskDeleted'))
    //     .catch(() => toast.error('taskDeleteError'));
  };

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openModalUpDateTask());
  };

  return (
    <>
      <TaskToolbarStyled>
        <TaskToolbarBtn onClick={toggleModal}>
          <Svg>
            <use xlinkHref={iconTrash + '#icon-round-arrow'}></use>
          </Svg>
        </TaskToolbarBtn>
        <TaskToolbarBtn onClick={openModal}>
          <Svg>
            <use xlinkHref={iconTrash + '#icon-pencil'}></use>
          </Svg>
        </TaskToolbarBtn>

        <TaskToolbarBtn onClick={handleDeleteTask}>
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
