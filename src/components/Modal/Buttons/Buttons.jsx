import { AddButtons } from '../AddButtons/AddButtons';
// import { EditButtons } from '../EditButtons/EditButtons';
import { ButtonsWrapper } from './Buttons.styled';

export const Buttons = ({ actionFu, closeModal, typeOfButton }) => {
  return (
    <ButtonsWrapper>
      {typeOfButton === 'add' && (
        <AddButtons closeModal={closeModal} actionFu={actionFu} />
      )}

      {/* {typeOfButton === 'edit' && (
        <EditButtons text={'Edit'} closeModal={closeModal} />
      )} */}
    </ButtonsWrapper>
  );
};
