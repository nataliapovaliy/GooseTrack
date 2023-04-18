// "1. Компонент отримує в пропсах заголовок колонки групи та ідентифікатор ступеню виконання задач
// в цій колонці(To do | In progress | Done)

import { AddTaskBtnHead } from '../AddTaskBtn/AddTaskBtnHead';
import { TitleColumn, ColumnHeadWrapper } from './ColumnHeadBar.styled';

// 2. Компонент рендерить блок розмітки
//  - з заголовком колонки,
//  - кнопкою для створення нової задачі, що відкриває модалку для створення задачі."


export const ColumnHeadBar = ({ title, tasks }) => {
   
    return (
      <ColumnHeadWrapper>
        <TitleColumn>{title}</TitleColumn>
        <div>
          <AddTaskBtnHead tasks={tasks} />
        </div>
      </ColumnHeadWrapper>
    );
   
}
