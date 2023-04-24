import React, { useState, useEffect } from 'react';
import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';
import { TasksColumnsListWrapper } from './ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

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
import { deleteTask } from 'redux/tasks/tasks-operations';

const dayFilter = (tasksMonth, date) => {
  const filteredTasks = tasksMonth.filter(({ createAt }) => {
    return createAt === date;
  });

  return filteredTasks;
};

const ChoosedDay = () => {
  const [tasksFilter, setTasksFilter] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [choosedDay, setChoosedDay] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [typeOfColumn, setTypeOfColumn] = useState(null);
  const [taskFromCard, setTaskFromCard] = useState(null);
  // const [taskId, setTaskId] = useState(null)

  const tasksMonth = useSelector(selectArrTasks);
  const modalAddState = useSelector(selectAddTaskOpen);
  const modalEditState = useSelector(selectUpDateTaskModal);
  const modalConfirmationState = useSelector(selectModalConfirmation);
  // console.log('tasksMonth', tasksMonth);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeModalAddTask());
    setTaskFromCard(null);
  };

  const closeEditModal = () => dispatch(closeModalUpDateTask());
  const closeDeleteModal = () => dispatch(closeModalConfirmation());

  const deleteTaskFu = () => {
    closeDeleteModal();
    // console.log(taskFromCard);
    dispatch(deleteTask(taskFromCard._id))
      .then(() => toast.success('taskDeleted'))
      .catch(() => toast.error('taskDeleteError'));
    setTaskFromCard(null);
  };

  // functions for add task =============================>

  const getTypeOfColumn = data => {
    setTypeOfColumn(prevState => (prevState = data));
    console.log(typeOfColumn);
  };

  const getTask = task => {
    setTaskFromCard(task);
  };

  // functions for add task =============================>

  useEffect(() => {
    setTasksFilter(dayFilter(tasksMonth, choosedDay));
    console.log(
      'Page loaded, filter tasks for TODAY',
      dayFilter(tasksMonth, choosedDay)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksMonth]);

  const chooseDay = ({ day, month, year }) => {
    setTasksFilter(dayFilter(tasksMonth, `${year}-${month}-${day}`));
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
          actionFu={deleteTaskFu}
          typeOfModal={'deleteTask'}
        />
      )}
    </TasksColumnsListWrapper>
  );
};

export { ChoosedDay };
