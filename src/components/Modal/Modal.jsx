import { DivOverlay, ModalBody } from './Modal.styled';
import { Cross } from './Cross/Cross';
import { TaskForm } from './TaskForm/TaskForm';
import { LogoutForm } from './LogoutForm/LogoutForm';
import { DeleteForm } from './DeleteForm/DeleteForm';
import { EditForm } from './EditForm/EditForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModalAddTask,
  closeModalConfirmation,
  closeModalLogOut,
  closeModalUpDateTask,
} from 'redux/modal/globalSlice';

import {
  selectAddTaskOpen,
  selectModalConfirmation,
  selectModalLogout,
  selectUpDateTaskModal,
} from 'redux/modal/globalSelectors';
import { useEffect, useState } from 'react';

export const Modal = ({
  typeOfModal,
  closeModal,
  actionFu,
  typeOfColumn,
  taskFromCard,
  choosedDay,
}) => {
  const dispatch = useDispatch();

  const madalAdd = useSelector(selectAddTaskOpen);
  const modalEdit = useSelector(selectUpDateTaskModal);
  const modalConfirm = useSelector(selectModalConfirmation);
  const modalExit = useSelector(selectModalLogout);

  const closeAll = () => {
    dispatch(closeModalAddTask());
    dispatch(closeModalUpDateTask());
    dispatch(closeModalConfirmation());
    dispatch(closeModalLogOut());
  };

  const close = () => {
    setIsVisible(false);
    closeAll();
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (madalAdd || modalEdit || modalConfirm || modalExit) {
      setIsVisible(true);
      return;
    }
    setIsVisible(false);
  }, [madalAdd, modalEdit, modalConfirm, modalExit]);

  return (
    <>
      {isVisible && <DivOverlay onClick={close}></DivOverlay>}

      <ModalBody>
        <Cross
          func={closeModal}
          height={'14px'}
          bcgCr={'var(--title-text-main-color)'}
        />
        {typeOfModal === 'add' && (
          <TaskForm
            closeModal={closeModal}
            typeOfModal={typeOfModal}
            typeOfColumn={typeOfColumn}
            choosedDay={choosedDay}
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
    </>
  );
};
