//     "1. Компонент рендериться на розширеному маршруті сторінки /calendar/day/:currentDay
// 2. Компонент підписаний на колекцію завдань з глобального стейту
// 3. Компонент визначає завдання для обраного дня, фільтрує за ступенем віиконання To do | In progress | Done та показує і відповідних колонках.
// 5. Компонент рендерить:
//  - DayCalendarHead - дні тижня з датами, клік по дню з датою показує колинки з задачами за обраний день.
//  - TasksColumnsList - блок з трьома колонками списків завданнь - TasksColumn (To do | In progress | Done).
// На мобільній та планшетній версії має горизонтальний скрол, якщо колонок більше ніж вміщає ширина екрану пристрою юзера."

import React from 'react';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getTasks } from '../../redux/tasks/tasks-selectors';
import { TasksColumnsList } from './TasksColumnsList/TasksColumnsList';
import { TasksColumnsListWrapper } from './ChoosedDay.styled';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { tasksData } from './taskData';
import { Modal } from 'components/Modal/Modal';

const ChoosedDay = () => {
  const tasks = tasksData;
  console.log(tasks);

  const [modalOpen, setModalOpen] = useState(true);
  const closeModal = event => {
    setModalOpen(false);
  };

  return (
    <TasksColumnsListWrapper>
      <DayCalendarHead />
      <TasksColumnsList tasks={tasks} />
      {modalOpen && <Modal closeModal={closeModal}></Modal>}
    </TasksColumnsListWrapper>
  );
};

export { ChoosedDay };
