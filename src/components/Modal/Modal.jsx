import { ModalBody } from './Modal.styled';
import { Cross } from './Cross/Cross';
import { TaskForm } from './TaskForm/TaskForm';
// import { Buttons } from './Buttons/Buttons';

export const Modal = ({ typeOfModal, closeModal }) => {
  return (
    <ModalBody>
      <Cross func={closeModal} height={'14px'} bcgCr={'#111111'} />
      {(typeOfModal === 'add' || 'edit') && (
        <TaskForm closeModal={closeModal} typeOfModal={typeOfModal} />
      )}
    </ModalBody>
  );
};
