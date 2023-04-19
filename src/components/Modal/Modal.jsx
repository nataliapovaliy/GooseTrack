import { ModalBody } from './Modal.styled';
import { Cross } from './Cross/Cross';
import { TaskForm } from './TaskForm/TaskForm';
// import { Buttons } from './Buttons/Buttons';

export const Modal = ({ closeModal }) => {
  return (
    <ModalBody>
      <Cross
        func={closeModal}
        height={'14px'}
        bcgCr={'--title-text-main-color'}
      />
      <TaskForm />
    </ModalBody>
  );
};
