import React, { useEffect } from 'react';
import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';
import { TasksColumnsListWrapper } from './ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { useDispatch, useSelector } from 'react-redux';

import { selectArrTasks } from 'redux/tasks/tasks-selectors';
import { fetchTasks } from 'redux/tasks/tasks-operations';

import {
  selectAddTaskOpen,
  selectUpDateTaskModal,
  selectModalConfirmation,
} from 'redux/modal/globalSelectors';
import { Modal } from 'components/Modal/Modal';
import {
  closeModalAddTask,
  closeModalUpDateTask,
  closeModalConfirmation,
} from 'redux/modal/globalSlice';

const ChoosedDay = () => {
  const tasksMonth = useSelector(selectArrTasks);
  const modalAddState = useSelector(selectAddTaskOpen);
  const modalEditState = useSelector(selectUpDateTaskModal);
  const modalConfirmationState = useSelector(selectModalConfirmation);

  const dispatch = useDispatch();

  useEffect(() => {
    const currentDate = new Date();
    const year = String(currentDate.getFullYear());
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');

    dispatch(fetchTasks({ month, year }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = () => {
    dispatch(closeModalAddTask());
  };

  const closeEditModal = () => dispatch(closeModalUpDateTask());
  const closeDeleteModal = () => dispatch(closeModalConfirmation());

  const deleteTask = () => {
    closeDeleteModal();
  };
  //

  return (
    <TasksColumnsListWrapper>
      <DayCalendarHead />
      <TasksColumnsList tasks={tasksMonth} />
      {modalAddState && <Modal closeModal={closeModal} typeOfModal={'add'} />}
      {modalEditState && (
        <Modal closeModal={closeEditModal} typeOfModal={'edit'} />
      )}
      {modalConfirmationState && (
        <Modal
          closeModal={closeDeleteModal}
          actionFu={deleteTask}
          typeOfModal={'deleteTask'}
        />
      )}
    </TasksColumnsListWrapper>
  );
};

export { ChoosedDay };
