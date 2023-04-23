import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Button } from '../Button/Button';
import { Form } from './Form/Form';
import { EditButtons } from '../EditButtons/EditButtons';
import { Priority } from '../Priority/Priority';
import { closeModalUpDateTask } from 'redux/modal/globalSlice';

export const EditForm = ({
  taskFromCard,
  closeModal,
  typeOfModal,
  typeOfColumn,
}) => {
  const [editText, setEditText] = useState('');
  const [startText, setStartText] = useState('');
  const [endText, setEndText] = useState('');

  const dispatch = useDispatch();

  const [obj, setObj] = useState([
    { status: true, key: 'Low', color: 'blue' },
    { status: false, key: 'Medium', color: 'orange' },
    { status: false, key: 'Heigh', color: 'red' },
  ]);

  const updateTask = () => {
    dispatch(closeModalUpDateTask());
  };

  useEffect(() => {
    setEditText(prevState => (prevState = taskFromCard.title));
    setStartText(prevState => (prevState = taskFromCard.start));
    setEndText(prevState => (prevState = taskFromCard.end));
  }, [taskFromCard]);

  const titleSetter = event => {
    const { value } = event.target;
    setEditText(prevState => (prevState = value));
  };
  const startSetter = event => {
    const { value } = event.target;
    setStartText(prevState => (prevState = value));
  };
  const endSetter = event => {
    const { value } = event.target;
    setEndText(prevState => (prevState = value));
  };

  return (
    <>
      <Form
        titleSetter={titleSetter}
        startSetter={startSetter}
        endSetter={endSetter}
        editText={editText}
        startText={startText}
        endText={endText}
      />
      <Priority obj={obj} />

      <EditButtons actionFu={updateTask} />
      {/* <Button text={'Edit'} closeModal={closeModal} /> */}
      {/* {typeOfButton === 'edit' && (
        <EditButtons text={'Edit'} closeModal={closeModal} />
      )} */}
    </>
  );
};
