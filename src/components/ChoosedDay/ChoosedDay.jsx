import React, { useState, useEffect } from 'react';
import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';
import { TasksColumnsListWrapper } from './ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { useDispatch, useSelector } from 'react-redux';

import { selectArrTasks } from 'redux/tasks/tasks-selectors';

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
  const [tasksFilter, setTasksFilter] = useState([]);

  const tasksMonth = useSelector(selectArrTasks);
  const modalAddState = useSelector(selectAddTaskOpen);
  const modalEditState = useSelector(selectUpDateTaskModal);
  const modalConfirmationState = useSelector(selectModalConfirmation);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeModalAddTask());
  };

  const closeEditModal = () => dispatch(closeModalUpDateTask());
  const closeDeleteModal = () => dispatch(closeModalConfirmation());

  const deleteTask = () => {
    closeDeleteModal();
  };

  useEffect(() => {
    const currentDayFilter = tasksMonth.filter(({ start, end }) => {
      const currentDate = new Date();
      const currentDay = currentDate
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '/');

      return start <= currentDay && end >= currentDay;
    });

    setTasksFilter(currentDayFilter);
    console.log('Page loDED', currentDayFilter)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksMonth]);

  const chooseDay = ({ day, month, year }) => {
    const filteredTasks = tasksMonth.filter(({ start, end }) => {
      const chosenDate = `${year}/${month}/${day}` ;

      console.log('cLICK on week day', chosenDate);

      return start <= chosenDate && end >= chosenDate;
    });
console.log(filteredTasks);
    setTasksFilter(filteredTasks);
  };

  return (
    <TasksColumnsListWrapper>
      <DayCalendarHead clickChooseDay={chooseDay} />
      <TasksColumnsList tasks={tasksFilter} />
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
