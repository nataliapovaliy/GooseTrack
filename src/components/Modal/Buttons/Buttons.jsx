import { AddButtons } from '../AddButtons/AddButtons';
import { ButtonsWrapper } from './Buttons.styled';

export const Buttons = ({ typeOfButton }) => {
  return (
    <ButtonsWrapper>
      {typeOfButton === 'add' && <AddButtons />}
      {/* {typeOfButton === 'add' && <Button text={'Cancel'} />}
      {typeOfButton === 'edit' && <Button text={'Edit'} />} */}
    </ButtonsWrapper>
  );
};
