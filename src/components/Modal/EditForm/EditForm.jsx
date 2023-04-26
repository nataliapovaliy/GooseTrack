import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Button } from '../Button/Button';
import { Form } from './Form/Form';
import { EditButtons } from '../EditButtons/EditButtons';
import { Priority } from '../Priority/Priority';
import { updateTask } from '../../../redux/tasks/tasks-operations';
import { StyledDiv } from './EditForm.styled';
import Notiflix from 'notiflix';

export const EditForm = ({ taskFromCard, closeModal }) => {
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

    setPrioritys(prevState => (prevState = priorityChecked));
  };

  useEffect(() => {
    if (startText && String(startText).length > 5) {
      setStartText('');
      Notiflix.Notify.failure('Enter the correct time in the format 00:00');
    }
    if (endText && String(endText).length > 5) {
      setEndText('');
      Notiflix.Notify.failure('Enter the correct time in the format 00:00');
    }
    if (editText && String(editText).length > 255) {
      setEditText(editText.slice(0, 255));
      Notiflix.Notify.failure('title cannot be longer than 255 characters');
    }
  }, [startText, endText, editText]);

  const timeFormatValidation = (hour, mimutes) => {
    let valid = 'valid';

    if (Number(hour) > 23) {
      Notiflix.Notify.failure(
        'you cannot specify an hour value greater than 23'
      );
      return (valid = 'invalid');
    }
    if (Number(mimutes > 59)) {
      Notiflix.Notify.failure(
        'you cannot specify an minutes value greater than 59'
      );
      return (valid = 'invalid');
    }
    return valid;
  };

  const timeFormValidation = () => {
    let status = 'valid';
    let timeOfStart = startText.slice(0, 2).concat(startText.slice(3, 5));
    let timeOfEnd = endText.slice(0, 2).concat(endText.slice(3, 5));

    if (Number(timeOfStart) >= Number(timeOfEnd)) {
      // setStartText('');
      // setEndText('');
      status = 'invalid';
    }
    return status;
  };

  const onFocusFu = event => {
    const { name } = event.target;
    switch (name) {
      case 'start':
        setStartText('');
        break;
      case 'end':
        setEndText('');
        break;

      default:
        break;
    }
  };

  function isAN(value) {
    return (
      (value instanceof Number || typeof value === 'number') && !isNaN(value)
    );
  }

  const onBlurFu = event => {
    const { name, value } = event.target;
    if (value && String(value).length < 4) {
      Notiflix.Notify.failure('value cannot be less than 4 characters');
    }
    switch (name) {
      case 'start':
        if (value && String(value).length === 5) {
          let hour = value.slice(0, 2);
          let mimutes = value.slice(3, 5);
          if (!isAN(Number(hour)) || !isAN(Number(mimutes))) {
            Notiflix.Notify.failure('Value must be the number');
            setStartText('');
            return;
          }
          if (timeFormatValidation(hour, mimutes) === 'invalid') {
            setStartText('');
            return;
          }
          const time = hour.concat(':', mimutes);
          setStartText(time);
        }
        if (value && String(value).length === 4) {
          let hour = value.slice(0, 2);
          let mimutes = value.slice(2, 4);
          if (!isAN(Number(hour)) || !isAN(Number(mimutes))) {
            Notiflix.Notify.failure('Value must be the number');
            setStartText('');
            return;
          }
          if (timeFormatValidation(hour, mimutes) === 'invalid') {
            setStartText('');
            return;
          }
          const time = hour.concat(':', mimutes);
          setStartText(time);
        }

        break;
      case 'end':
        if (value && String(value).length === 5) {
          let hour = value.slice(0, 2);
          let mimutes = value.slice(3, 5);
          if (!isAN(Number(hour)) || !isAN(Number(mimutes))) {
            Notiflix.Notify.failure('Value must be the number');
            setEndText('');
            return;
          }
          if (timeFormatValidation(hour, mimutes) === 'invalid') {
            setEndText('');
            return;
          }
          const time = hour.concat(':', mimutes);
          setEndText(time);
        }
        if (value && String(value).length === 4) {
          let hour = value.slice(0, 2);
          let mimutes = value.slice(2, 4);
          if (!isAN(Number(hour)) || !isAN(Number(mimutes))) {
            Notiflix.Notify.failure('Value must be the number');
            setEndText('');
            return;
          }
          if (timeFormatValidation(hour, mimutes) === 'invalid') {
            setEndText('');
            return;
          }
          const time = hour.concat(':', mimutes);
          setEndText(time);
        }

        break;
      default:
        break;
    }
  };

  const updateTaskFu = () => {
    if (timeFormValidation() === 'invalid') {
      Notiflix.Notify.failure(
        'task end time cannot be greater ore equal than its start time'
      );
      return;
    }
    if (startText.length < 5 && endText.length < 5 && editText.length < 1) {
      Notiflix.Notify.failure('fields cannot be empty');
      return;
    }
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

    dispatch(updateTask(taskForUpdate, id));
  };

  useEffect(() => {
    setEditText(prevState => (prevState = taskFromCard.title));
    setStartText(prevState => (prevState = taskFromCard.start));
    setEndText(prevState => (prevState = taskFromCard.end));
    setPrioritys(prevState => (prevState = taskFromCard.priority));
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
        onBlurFu={onBlurFu}
        onFocusFu={onFocusFu}
      />
      <Priority obj={obj} prioritySelector={prioritySelector} />
      <StyledDiv>
        <EditButtons actionFu={updateTaskFu} />
      </StyledDiv>
    </>
  );
};
