import { useState } from 'react';
import { Priority } from '../Priority/Priority';
import { Buttons } from '../Buttons/Buttons';
import { Form } from '../Form/Form';

export const TaskForm = () => {
  const [enterText, setEnterText] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [priority, setPriority] = useState([
    { status: true, key: 'Low', color: 'blue' },
    { status: false, key: 'Medium', color: 'orange' },
    { status: false, key: 'Heigh', color: 'red' },
  ]);

  console.log(setPriority);
  // const priorityChanger = event => {
  //   const some = priority.map(item => {
  //     item.status = false;
  //     if (item.key === event.target.id) {
  //       item.status = true;
  //     }
  //     console.log(some);

  //     setPriority([]);
  //   });
  // };

  const inputHendler = event => {
    const { value, name } = event.target;

    switch (name) {
      case 'text':
        setEnterText(value);
        break;
      case 'hours':
        setHours(value);
        break;
      case 'minutes':
        setMinutes(value);
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
        hours={hours}
        minutes={minutes}
      />
      <Priority priority={priority} />
      <Buttons typeOfButton={'add'} />
    </>
  );
};
