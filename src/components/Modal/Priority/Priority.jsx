import {
  PriorityWraper,
  PriorityItem,
  PriorityCircle,
  ActiveCircle,
  StyledPar,
} from './Priority.styled';

export const Priority = ({ prioritySelector, func, obj }) => {
  return (
    <PriorityWraper onClick={func}>
      {obj.map(item => {
        const { status, key, color } = item;
        {
          console.log('key', key);
        }
        return (
          <PriorityItem key={key} onClick={prioritySelector}>
            <PriorityCircle color={color}>
              {status && <ActiveCircle color={color}></ActiveCircle>}
            </PriorityCircle>
            <StyledPar>{key}</StyledPar>
          </PriorityItem>
        );
      })}
    </PriorityWraper>
  );
};
