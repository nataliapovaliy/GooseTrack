import { ModalBody } from './Modal.styled';
import { Cross } from './Cross/Cross';
import { TaskForm } from './TaskForm/TaskForm';
import { LogoutForm } from './LogoutForm/LogoutForm';
import { DeleteForm } from './DeleteForm/DeleteForm';
import { EditForm } from './EditForm/EditForm';

export const Modal = ({
  typeOfModal,
  closeModal,
  actionFu,
  typeOfColumn,
  taskFromCard,
}) => {
  // console.log('taskFromCard', taskFromCard);
  return (
    <ModalBody>
      <Cross func={closeModal} height={'14px'} bcgCr={'#111111'} />
      {typeOfModal === 'add' && (
        <TaskForm
          closeModal={closeModal}
          typeOfModal={typeOfModal}
          typeOfColumn={typeOfColumn}
        />
      )}
      {typeOfModal === 'edit' && (
        <EditForm
          closeModal={closeModal}
          typeOfModal={typeOfModal}
          typeOfColumn={typeOfColumn}
          taskFromCard={taskFromCard}
        />
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
