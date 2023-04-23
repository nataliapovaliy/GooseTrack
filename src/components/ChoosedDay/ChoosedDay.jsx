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
  const [typeOfColumn, setTypeOfColumn] = useState(null);
  const [taskFromCard, setTaskFromCard] = useState(null);

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

  // functions for add task =============================>

  const getTypeOfColumn = data => {
    setTypeOfColumn(prevState => (prevState = data));
  };

  const getTask = task => {
    setTaskFromCard(task);
  };

  // functions for add task =============================>

  useEffect(() => {
    const currentDayFilter = tasksMonth.filter(({ createAt }) => {
      const currentDate = new Date();
      const currentDay = currentDate
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '/');
      // console.log('currentDay', currentDay);
      const start = createAt.split('T')[0].replace(/-/g, '/');
      const end = createAt.split('T')[0].replace(/-/g, '/');

      return start <= currentDay && end >= currentDay;
    });

    setTasksFilter(currentDayFilter);

    console.log('Page loaded', currentDayFilter);


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksMonth]);

  const chooseDay = ({ day, month, year }) => {

    const filteredTasks = tasksMonth.filter(({ createAt }) => {
      const start = createAt.split('T')[0].replace(/-/g, '/');
      const end = createAt.split('T')[0].replace(/-/g, '/');

      const chosenDate = `${year}/${month}/${day}`;

      // console.log('Click on week day:', chosenDate);

      return start <= chosenDate && end >= chosenDate;
    });

    // console.log('Task of the choosed day>>>',filteredTasks);

    setTasksFilter(filteredTasks);
  };

  return (
    <TasksColumnsListWrapper>
      <DayCalendarHead clickChooseDay={chooseDay} />
      <TasksColumnsList
        tasks={tasksFilter}
        getTypeOfColumn={getTypeOfColumn}
        getTask={getTask}
      />
      {modalAddState && (
        <Modal
          closeModal={closeModal}
          typeOfModal={'add'}
          typeOfColumn={typeOfColumn}
        />
      )}
      {modalEditState && (
        <Modal
          closeModal={closeEditModal}
          typeOfModal={'edit'}
          taskFromCard={taskFromCard}
        />
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
