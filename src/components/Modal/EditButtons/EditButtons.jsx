import { Button } from '../Button/Button';
import { StyledButtonWraper } from './EditButtons.styled';

export const EditButtons = ({ actionFu }) => {
  return (
    <StyledButtonWraper>
      <Button
        actionFu={actionFu}
        cross={false}
        bcg={'#3E85F3'}
        color={'#FFFFFF'}
        text={'Edit'}
      />
    </StyledButtonWraper>
    // StyledButtonWraper
  );
};
