// "1. Компонент рендерить список кнопок:
//  - переміщення картки в іншу групу - відкриває контекстне меню зі списком всіх груп окрім поточної.
// Клік по кнопці зі списку виконує запит на бекенд, в якому відбувається зміна ступеню виконання задачі.
// Успіх - закривається меню і картка переміщається з поточної групи в відповідну нову.
// Помилка - юзеру показується відповідне пушповідомлення.
// - редагування картки - відкриває TaskModal - з полями заповненими даними з поточного завдання.
// - видалення картки - виконує запит на бек, який видаляє завдання.
// Успіх - завдання видаляється зі списку на сторінці, юзеру показується пушповідомлення про видалення
// Помилка - юзеру показується відповідне пушповідомлення"

import { useState } from 'react';
import { TaskToolbarStyled, TaskToolbarBtn, Svg } from './TaskToolbar.styled';

import iconTrash from './icons.svg';
// import { deleteTask } from '../../redux/tasks/tasks-operations';
// import { toast } from 'react-toastify';
// import { TaskModal } from '../TaskModal/TaskModal';
// import { TaskModalContext } from '../../context/TaskModalContext';

export const TaskToolbar = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(prev => !prev);

  // const dispatch = useDispatch();
  console.log('isModalOpen :>> ', isModalOpen);

  const handleDeleteTask = () => {
    console.log('delete task');
    // dispatch(deleteTask(task.id))
    //     .then(() => toast.success('taskDeleted'))
    //     .catch(() => toast.error('taskDeleteError'));
  };

  return (
    <>
      <TaskToolbarStyled>
        <TaskToolbarBtn onClick={toggleModal}>
          <Svg>
            <use xlinkHref={iconTrash + '#icon-round-arrow'}></use>
          </Svg>
        </TaskToolbarBtn>
        <TaskToolbarBtn onClick={toggleModal}>
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
