import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Priority } from '../Priority/Priority';
import { Buttons } from '../Buttons/Buttons';
import { Form } from '../Form/Form';

import { addTask } from '../../../redux/tasks/tasks-operations';
import { closeModalAddTask } from 'redux/modal/globalSlice';
import Notiflix from 'notiflix';
// import { pushNewTask } from 'redux/tasks/tasks-slice';

export const TaskForm = ({
  typeOfModal,
  closeModal,
  typeOfColumn,
  choosedDay,
}) => {
  const [enterText, setEnterText] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [prioritys, setPrioritys] = useState('Low');

  const [obj, setObj] = useState([
    { status: true, key: 'Low', color: 'blue' },
    { status: false, key: 'Medium', color: 'orange' },
    { status: false, key: 'High', color: 'red' },
  ]);

  const dispatch = useDispatch();

  const prioritySelector = event => {
    const priorityChecked = event.target.innerText;

    setPrioritys(prevState => (prevState = priorityChecked));
  };

  const objectFormation = async () => {
    if (timeFormValidation() === 'invalid') {
      Notiflix.Notify.failure(
        'task end time cannot be greater ore equal than its start time'
      );
      return;
    }
    if (start.length < 5 && end.length < 5 && enterText.length < 1) {
      Notiflix.Notify.failure('fields cannot be empty');
      return;
    }

    const objectToDispatch = {
      title: enterText,
      start: start.slice(0, 5),
      end: end.slice(0, 5),
      // createAt: new Date().toLocaleDateString('en-CA'),
      createAt: choosedDay,
      priority: prioritys,
      ...typeOfColumn,
    };

    await dispatch(addTask(objectToDispatch));

    dispatch(closeModalAddTask());
  };

  const onFocusFu = event => {
    const { name } = event.target;
    switch (name) {
      case 'start':
        setStart('');
        break;
      case 'end':
        setEnd('');
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (start && String(start).length > 5) {
      setStart('');
      Notiflix.Notify.failure('Enter the correct time in the format 00:00');
    }
    if (end && String(end).length > 5) {
      setEnd('');
      Notiflix.Notify.failure('Enter the correct time in the format 00:00');
    }
    if (enterText && String(enterText).length > 255) {
      setEnterText(enterText.slice(0, 255));
      Notiflix.Notify.failure('title cannot be longer than 255 characters');
    }
  }, [start, end, enterText]);

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
    let timeOfStart = start.slice(0, 2).concat(start.slice(3, 5));
    let timeOfEnd = end.slice(0, 2).concat(end.slice(3, 5));

    if (Number(timeOfStart) >= Number(timeOfEnd)) {
      // setStartText('');
      // setEndText('');
      status = 'invalid';
    }
    return status;
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
            setStart('');
            return;
          }
          if (timeFormatValidation(hour, mimutes) === 'invalid') {
            setStart('');
            return;
          }
          const time = hour.concat(':', mimutes);
          setStart(time);
        }
        if (value && String(value).length === 4) {
          let hour = value.slice(0, 2);
          let mimutes = value.slice(2, 4);

          if (!isAN(Number(hour)) || !isAN(Number(mimutes))) {
            Notiflix.Notify.failure('Value must be the number');
            setStart('');
            return;
          }
          if (timeFormatValidation(hour, mimutes) === 'invalid') {
            setStart('');
            return;
          }
          const time = hour.concat(':', mimutes);
          setStart(time);
        }

        break;
      case 'end':
        if (value && String(value).length === 5) {
          let hour = value.slice(0, 2);
          let mimutes = value.slice(3, 5);
          if (!isAN(Number(hour)) || !isAN(Number(mimutes))) {
            Notiflix.Notify.failure('Value must be the number');
            setStart('');
            return;
          }
          if (timeFormatValidation(hour, mimutes) === 'invalid') {
            setEnd('');
            return;
          }
          const time = hour.concat(':', mimutes);
          setEnd(time);
        }
        if (value && String(value).length === 4) {
          let hour = value.slice(0, 2);
          let mimutes = value.slice(2, 4);
          if (!isAN(Number(hour)) || !isAN(Number(mimutes))) {
            Notiflix.Notify.failure('Value must be the number');
            setStart('');
            return;
          }
          if (timeFormatValidation(hour, mimutes) === 'invalid') {
            setEnd('');
            return;
          }
          const time = hour.concat(':', mimutes);
          setEnd(time);
        }

        break;
      default:
        break;
    }
  };

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
    setEnterText(prevState => (prevState = value));
  };
  const startSetter = event => {
    const { value } = event.target;
    setStart(prevState => (prevState = value));
  };
  const endSetter = event => {
    const { value } = event.target;
    setEnd(prevState => (prevState = value));
  };

  return (
    <>
      <Form
        // inputHendler={inputHendler}
        titleSetter={titleSetter}
        startSetter={startSetter}
        endSetter={endSetter}
        onBlurFu={onBlurFu}
        onFocusFu={onFocusFu}
        enterTextTitle={enterText}
        startTitle={start}
        endTitle={end}
      />
      <Priority obj={obj} prioritySelector={prioritySelector} />
      <Buttons
        typeOfButton={typeOfModal}
        closeModal={closeModal}
        actionFu={objectFormation}
      />
    </>
  );
};
