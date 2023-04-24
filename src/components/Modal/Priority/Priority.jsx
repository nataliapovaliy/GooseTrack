import { PriorityWraper } from './Priority.styled';

import { PriorityItems } from './PriorityItem/PriorityItem';

export const Priority = ({ prioritySelector, func, obj }) => {
  return (
    <PriorityWraper onClick={func}>
      <PriorityItems obj={obj} prioritySelector={prioritySelector} />
    </PriorityWraper>
  );
};
