import { Cross } from '../Cross/Cross';
import { StyledButton, ItemWraper } from './Button.styled';

export const Button = ({ closeModal, cross, addTask, color, bcg, text }) => {
  return (
    <StyledButton bcg={bcg} color={color} onClick={closeModal}>
      <ItemWraper>
        {cross && <Cross func={addTask} height={'14px'} bcgCr={'#ffffff'} />}
      </ItemWraper>
      {text}
    </StyledButton>
  );
};
