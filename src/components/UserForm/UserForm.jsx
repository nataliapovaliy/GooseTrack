import { Formik, Form, ErrorMessage } from 'formik';
import { object, string, number, date } from 'yup';
import { useState } from 'react';

import {
  Container,
  Wrapper,
  Input,
  DatePick,
  Btn,
  InputFile,
} from './UserForm.styled';

const userSchema = object({
  username: string().max(16).required(),
  birthday: date().default(() => new Date()),
  email: string().email().required(),
  phone: number(),
  skype: string().max(16),
});

const initialValues = {
  username: '',
  birthday: '',
  email: '',
  phone: '',
  skype: '',
};

const UserForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Container>
      <Wrapper>
        <label htmlFor="file">
          <InputFile type="file" name="file"></InputFile>
          <button>Отправить фото</button>
        </label>

        <h1>User Name</h1>
        <p>User</p>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={userSchema}
        >
          <Form autoComplete="off">
            <label htmlFor="username">
              User Name
              <Input type="text" name="username"></Input>
              <ErrorMessage name="username" />
            </label>

            <label htmlFor="birthday">
              Birthday
              <DatePick
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
              />
              <ErrorMessage name="birthday" />
            </label>

            <label htmlFor="email">
              Email
              <Input type="email" name="email"></Input>
              <ErrorMessage name="email" />
            </label>

            <label htmlFor="phone">
              Phone
              <Input type="tel" name="phone"></Input>
              <ErrorMessage name="phone" />
            </label>

            <label htmlFor="skype">
              Skype
              <Input type="text" name="skype"></Input>
              <ErrorMessage name="skype" />
            </label>

            <Btn type="submit">Save changes</Btn>
          </Form>
        </Formik>
      </Wrapper>
    </Container>
  );
};
export default UserForm;
