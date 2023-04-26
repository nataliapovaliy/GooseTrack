import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Priority } from '../Priority/Priority';
import { Buttons } from '../Buttons/Buttons';
import { Form } from '../Form/Form';

import { addTask } from '../../../redux/tasks/tasks-operations';
import { closeModalAddTask } from 'redux/modal/globalSlice';
// import { pushNewTask } from 'redux/tasks/tasks-slice';

export const TaskForm = ({
  typeOfModal,
  closeModal,
  typeOfColumn,
  choosedDay,
}) => {
  // console.log(new Date().toLocaleDateString('en-CA'));
  // console.log('choosedDay', choosedDay);
  const [enterText, setEnterText] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [prioritys, setPrioritys] = useState('Low');

  const [hour, sethour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hourEnd, sethourEnd] = useState(23);
  const [minutesEnd, setMinutesEnd] = useState(59);

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

  useEffect(() => {
    const newObj = [];
    obj.forEach(item => {
      if (item.status === true) {
        item.status = false;
      }
      if (item.key === prioritys) {
        item.status = true;
      }
      newObj.push(item);
    });
    setObj(prevState => (prevState = newObj));
    // eslint-disable-next-line
  }, [prioritys]);

  const objectFormation = async () => {
    const objectToDispatch = {
      title: enterText,
      start: start.slice(0, 5),
      end: end.slice(0, 5),
      // createAt: new Date().toLocaleDateString('en-CA'),
      createAt: choosedDay,
      priority: prioritys,
      ...typeOfColumn,
    };

    if (!enterText) {
      alert('task title cannot be empty');
      return;
    }

    if (!hour) {
      alert('task start time field cannot be empty');
      return;
    }
    if (hour.concat(minutes) >= hourEnd.concat(minutesEnd)) {
      console.log('second');
      alert('task end time cannot be greater ore equal than its start time');
      setEnd('');
      setStart('');
      sethour(0);
      sethourEnd(23);
      setMinutes(0);
      setMinutesEnd(59);
      return;
    }

    await dispatch(addTask(objectToDispatch));

    dispatch(closeModalAddTask());
  };

  useEffect(() => {
    if (start.slice(0, 2) > 23) {
      alert('you cannot specify an hour value greater than 23');
      setStart('');
    }
    if (start.slice(2, 4) > 59) {
      alert('you cannot specify an minutes value greater than 59');
      setStart('');
    }
    if (start.length === 2) {
      sethour(start);
    }
    if (start.length === 4) {
      setMinutes(start.slice(2));
    }
    if (start.length === 5) {
      setStart(hour.concat(':', minutes));
    }

    if (start.length === 6) {
      setStart('');
      setMinutes('');
      sethour('');
    }

    // console.log('hour', hour);
    // console.log('minutes', minutes);
  }, [start, minutes, hour]);

  useEffect(() => {
    if (end.slice(0, 2) > 23) {
      alert('you cannot specify an hour value greater than 24');
      setEnd('');
    }
    if (end.slice(2, 4) > 59) {
      alert('you cannot specify an minutes value greater than 59');
      setEnd('');
    }
    if (end.length === 2) {
      sethourEnd(end);
    }
    if (end.length === 4) {
      setMinutesEnd(end.slice(2));
    }
    if (end.length === 5) {
      setEnd(hourEnd.concat(':', minutesEnd));
    }
    if (end.length === 6) {
      setEnd('');
      setMinutesEnd('');
      sethourEnd('');
    }
  }, [end, minutesEnd, hourEnd]);

  const inputHendler = event => {
    const { value, name } = event.target;

    switch (name) {
      case 'text':
        setEnterText(value);
        break;
      case 'start':
        setStart(value);
        break;
      case 'end':
        setEnd(value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Form
        inputHendler={inputHendler}
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
