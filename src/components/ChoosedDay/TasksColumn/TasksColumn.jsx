//"1. Компонент отримує в пропсах заголовок групи завданнь та колекцію завданнь цієї групи.
// 2. Компонент рендерить:
//  - ColumnHeadBar - компонент з назвою колонки та кнопою для створення завдання в цій колонці.
//  - ColumnTasksList - компонент що показує список завдань, рендериться за умови, що відповідні завдання є в наявності.
//  - AddTaskBtn - кнопка для додавання завдання в колонку."
//

import React from 'react';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from '../ColumnsTasksList/ColumnsTasksList';
import { ColumnWrapper } from './TasksColumn.styled';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';

export const TasksColumn = ({ title, tasks }) => {
    
  return (
    <ColumnWrapper>
      <ColumnHeadBar title={title} />
      {tasks.length > 0 && <ColumnsTasksList tasks={tasks} />}
      <AddTaskBtn />
    </ColumnWrapper>
  );
};
