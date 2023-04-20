import { Button } from '../Button/Button';
import {
  ButtonWraper,
  CancelButton,
  LogoutButton,
  StyledP,
} from '../LogoutForm/LogoutForm.styled';

export const DeleteForm = ({ actionFu, closeModal }) => {
  return (
    <>
      <StyledP>Are you sure you whant to delete task?</StyledP>
      <ButtonWraper>
        <LogoutButton>
          <Button
            closeModal={actionFu}
            text={'Yes'}
            bcg={'#3E85F3'}
            color={'#FFFFFF'}
          />
        </LogoutButton>
        <CancelButton>
          <Button closeModal={closeModal} text={'Cancel'} />
        </CancelButton>
      </ButtonWraper>
    </>
  );
};
