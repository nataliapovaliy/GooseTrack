import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Button } from '../Button/Button';
import { Form } from './Form/Form';
import { EditButtons } from '../EditButtons/EditButtons';
import { Priority } from '../Priority/Priority';
import { updateTask } from '../../../redux/tasks/tasks-operations';
import { StyledDiv } from './EditForm.styled';

export const EditForm = ({
  taskFromCard,
  closeModal,
  // typeOfModal,
  // typeOfColumn,
}) => {
  const [editText, setEditText] = useState('');
  const [startText, setStartText] = useState('');
  const [endText, setEndText] = useState('');
  const [prioritys, setPrioritys] = useState('Low');

  const dispatch = useDispatch();

  const [obj, setObj] = useState([
    { status: true, key: 'Low', color: 'blue' },
    { status: false, key: 'Medium', color: 'orange' },
    { status: false, key: 'High', color: 'red' },
  ]);

  const prioritySelector = event => {
    const priorityChecked = event.target.innerText;
    console.log(obj);

    setPrioritys(prevState => (prevState = priorityChecked));
  };

  const updateTaskFu = () => {
    closeModal();
    const id = taskFromCard._id;
    const taskForUpdate = {
      id: taskFromCard._id,
      task: {
        title: editText,
        start: startText,
        end: endText,
        createAt: taskFromCard.createAt,
        priority: prioritys,
      },
    };
    console.log('taskForUpdate>>>>', taskForUpdate);
    dispatch(updateTask(taskForUpdate, id));
    // console.log(answer);
  };

  useEffect(() => {
    setEditText(prevState => (prevState = taskFromCard.title));
    setStartText(prevState => (prevState = taskFromCard.start));
    setEndText(prevState => (prevState = taskFromCard.end));
  }, [taskFromCard]);

  useEffect(() => {
    if (prioritys === 'High') {
      setObj(
        prevState =>
          (prevState = [
            { status: false, key: 'Low', color: 'blue' },
            { status: false, key: 'Medium', color: 'orange' },
            { status: true, key: 'High', color: 'red' },
          ])
      );
    } else if (prioritys === 'Medium') {
      setObj(
        prevState =>
          (prevState = [
            { status: false, key: 'Low', color: 'blue' },
            { status: true, key: 'Medium', color: 'orange' },
            { status: false, key: 'High', color: 'red' },
          ])
      );
    } else if (prioritys === 'Low') {
      setObj(
        prevState =>
          (prevState = [
            { status: true, key: 'Low', color: 'blue' },
            { status: false, key: 'Medium', color: 'orange' },
            { status: false, key: 'High', color: 'red' },
          ])
      );
    }
  }, [prioritys]);

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
      <Priority obj={obj} prioritySelector={prioritySelector} />
      <StyledDiv>
        <EditButtons actionFu={updateTaskFu} />
      </StyledDiv>
    </>
  );
};
