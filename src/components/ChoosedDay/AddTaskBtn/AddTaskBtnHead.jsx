// "1. Компонент отримує в пропсах id групи завдань
// 2. Компонент рендерить блок розмітки кнопки.
// 3. Клік по кнопці відкриває модалку TaskModal для створення нового завдання в поточній колонці"

import { useState } from 'react';
import { AddTaskBtnStyled, AddTaskBtnIconStyled, AddTaskBtnTextStyled } from './AddTaskBtnHead.styled';
// import { TaskModal } from '../TaskModal/TaskModal';


export const AddTaskBtnHead = ({ groupId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(prev => !prev);

    return (
        <>
            <AddTaskBtnStyled onClick={toggleModal}>
               <AddTaskBtnTextStyled> + </AddTaskBtnTextStyled>
            </AddTaskBtnStyled>
            {/* {isModalOpen && <TaskModal groupId={groupId} toggleModal={toggleModal} />} */}
        </>
    );
};
