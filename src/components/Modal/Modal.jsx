import { ModalBody } from './Modal.styled';
import { Cross } from './Cross/Cross';
import { TaskForm } from './TaskForm/TaskForm';
import { LogoutForm } from './LogoutForm/LogoutForm';
import { DeleteForm } from './DeleteForm/DeleteForm';
// import { Buttons } from './Buttons/Buttons';

export const Modal = ({ typeOfModal, closeModal, actionFu }) => {
  return (
    <ModalBody>
      <Cross func={closeModal} height={'14px'} bcgCr={'#111111'} />
      {(typeOfModal === 'add' || typeOfModal === 'edit') && (
        <TaskForm closeModal={closeModal} typeOfModal={typeOfModal} />
      )}
      {typeOfModal === 'logout' && (
        <LogoutForm closeModal={closeModal} actionFu={actionFu} />
      )}
      {typeOfModal === 'deleteTask' && (
        <DeleteForm closeModal={closeModal} actionFu={actionFu} />
      )}
    </ModalBody>
  );
};
