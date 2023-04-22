import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Priority } from '../Priority/Priority';
import { Buttons } from '../Buttons/Buttons';
import { Form } from '../Form/Form';

import { addTask } from '../../../redux/tasks/tasks-operations';
import { closeModalAddTask } from 'redux/modal/globalSlice';

export const TaskForm = ({ typeOfModal, closeModal, typeOfColumn }) => {
  const [enterText, setEnterText] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [prioritys, setPrioritys] = useState('Low');
  const [obj, setObj] = useState([
    { status: true, key: 'Low', color: 'blue' },
    { status: false, key: 'Medium', color: 'orange' },
    { status: false, key: 'Heigh', color: 'red' },
  ]);

  const dispatch = useDispatch();

  const prioritySelector = event => {
    const priorityChecked = event.target.innerText;

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

    setPrioritys(prevState => (prevState = priorityChecked));
  };

  // useEffect(() => {
  //   if (obj[0].number === newObj[0].number) {
  //     return;
  //   }

  //   obj.forEach(item => {
  //     if (item.status === true) {
  //       item.status = false;
  //       newObj.push(item);
  //     }
  //     if (item.key === prioritys) {
  //       item.status = true;
  //       newObj.push(item);
  //     }
  //   });
  //   setObj(prevState => (prevState = newObj));
  // }, [prioritys, obj]);

  const objectFormation = () => {
    const objectToDispatch = {
      title: enterText,
      start: start.slice(0, 5),
      end: end.slice(0, 5),
      createAt: new Date().toLocaleDateString('en-CA'),
      priority: prioritys,
      ...typeOfColumn,
    };

    const newTask = async () => {
      const answer = await dispatch(addTask(objectToDispatch));
      console.log('answer', answer.payload.data.result);
      return answer.payload.data.result;
    };
    newTask();

    dispatch(closeModalAddTask());
  };

  const inputHendler = event => {
    const { value, name } = event.target;

    switch (name) {
      case 'text':
        setEnterText(value);
        break;
      case 'start':
        setStart(value);
        if (start.length === 2) {
          setStart(start + ':');
        }
        if (start.length === 6) {
          setStart(start.slice(0, 5));
          return;
        }
        break;
      case 'end':
        setEnd(value);
        if (end.length === 2) {
          setEnd(end + ':');
        }
        if (end.length === 6) {
          setEnd(end.slice(0, 5));
          return;
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Form
        inputHendler={inputHendler}
        enterText={enterText}
        start={start}
        end={end}
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
