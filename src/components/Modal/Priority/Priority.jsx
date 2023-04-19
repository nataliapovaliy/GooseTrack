import {
  PriorityWraper,
  PriorityItem,
  PriorityCircle,
  ActiveCircle,
  StyledPar,
} from './Priority.styled';

export const Priority = ({ func, priority }) => {
  return (
    <PriorityWraper onClick={func}>
      {priority.map(item => {
        const { status, key, color } = item;
        return (
          <PriorityItem id={key}>
            <PriorityCircle color={color}>
              {status && (
                <ActiveCircle color={color} status={status}></ActiveCircle>
              )}
            </PriorityCircle>
            <StyledPar>{key}</StyledPar>
          </PriorityItem>
        );
      })}
    </PriorityWraper>
  );
};
