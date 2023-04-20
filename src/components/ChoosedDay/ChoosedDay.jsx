//     "1. Компонент рендериться на розширеному маршруті сторінки /calendar/day/:currentDay
// 2. Компонент підписаний на колекцію завдань з глобального стейту
// 3. Компонент визначає завдання для обраного дня, фільтрує за ступенем віиконання To do | In progress | Done та показує і відповідних колонках.
// 5. Компонент рендерить:
//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колинки з задачами за обраний день.
//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done).
// На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера."

import React from 'react';
import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';
import { TasksColumnsListWrapper } from './ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { tasksData } from './taskData';

import { useDispatch, useSelector } from 'react-redux';

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
  const tasks = tasksData;

  const modalAddState = useSelector(selectAddTaskOpen);
  const modalEditState = useSelector(selectUpDateTaskModal);
  const modalConfirmationState = useSelector(selectModalConfirmation);

  const dispatch = useDispatch();

  const closeModal = () => dispatch(closeModalAddTask());
  const closeEditModal = () => dispatch(closeModalUpDateTask());
  const closeDeleteModal = () => dispatch(closeModalConfirmation());

  const deleteTask = () => {
    closeDeleteModal();
  };
  //

  return (
    <TasksColumnsListWrapper>
      <DayCalendarHead />
      <TasksColumnsList tasks={tasks} />
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
