import React from 'react';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from '../ColumnsTasksList/ColumnsTasksList';
import { ColumnWrapper } from './TasksColumn.styled';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';

export const TasksColumn = ({ getTypeOfColumn, title, tasks, getTask }) => {

  return (
    <ColumnWrapper>
      <ColumnHeadBar
        title={title}
        getTypeOfColumn={getTypeOfColumn}
        tasks={tasks}
      />
      {tasks.length > 0 && <ColumnsTasksList tasks={tasks} getTask={getTask} />}
      <AddTaskBtn getTypeOfColumn={getTypeOfColumn} title={title} />
    </ColumnWrapper>
  );
};
