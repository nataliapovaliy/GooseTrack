import {
  TaskToolbarStyled,
  TaskToolbarBtn,
  Svg,
  TaskModalChangeStatusWrapper,
  TaskModalChangeStatusBtn,
  StateStatus,
} from './TaskToolbar.styled';

import icon from '../../../images/icons.svg';
import { useDispatch } from 'react-redux';
import {
  openModalUpDateTask,
  openModalConfirmation,
} from 'redux/modal/globalSlice';
import { useEffect, useState } from 'react';
import { fetchTasks, updateTask } from 'redux/tasks/tasks-operations';
import Notiflix from 'notiflix';
// import { deleteTask } from '../../redux/tasks/tasks-operations';
// import { TaskModal } from '../TaskModal/TaskModal';
// import { TaskModalContext } from '../../context/TaskModalContext';

export const TaskToolbar = ({ task, getTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusStates = ['To do', 'In progress', 'Done'];
  const [status, setStatus] = useState(task.status);
  console.log(setStatus);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);

    console.log('toggleModal', isModalOpen);
  };

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

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch, status]);

  const handleStatusChange = state => {
    const taskForUpdate = {
      id: task._id,
      task: {
        status: state,
      },
    };
    dispatch(updateTask(taskForUpdate, task._id));
    Notiflix.Notify.success(`Task status changed to ${state}`);
  };

  return (
    <>
      <TaskToolbarStyled>
        <TaskToolbarBtn onClick={() => toggleModal()}>
          <Svg>
            <use xlinkHref={icon + '#icon-round-arrow'}></use>
          </Svg>
        </TaskToolbarBtn>
        {isModalOpen && (
          <TaskModalChangeStatusWrapper data-modal="true">
            {statusStates
              .filter(states => states !== status)
              .map((state, index) => (
                <TaskModalChangeStatusBtn
                  key={index}
                  onClick={() => {
                    handleStatusChange(state);
                  }}
                >
                  <StateStatus>{state}</StateStatus>
                  <Svg>
                    <use xlinkHref={icon + '#icon-round-arrow'}></use>
                  </Svg>
                </TaskModalChangeStatusBtn>
              ))}
          </TaskModalChangeStatusWrapper>
        )}

        <TaskToolbarBtn onClick={() => openModal(task._id)}>
          <Svg>
            <use xlinkHref={icon + '#icon-pencil'}></use>
          </Svg>
        </TaskToolbarBtn>

        <TaskToolbarBtn onClick={confirmationOpen}>
          <Svg>
            <use xlinkHref={icon + '#icon-trash'}></use>
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
