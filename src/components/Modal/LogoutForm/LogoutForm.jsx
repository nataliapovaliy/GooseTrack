import { Button } from '../Button/Button';
import {
  LogoutButton,
  CancelButton,
  ButtonWraper,
  StyledP,
} from './LogoutForm.styled';

export const LogoutForm = ({ closeModal, actionFu }) => {
  return (
    <>
      <StyledP>Are you sure you whant to Logout?</StyledP>
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
