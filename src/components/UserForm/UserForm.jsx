import { Formik, ErrorMessage } from 'formik';
import { object, string, number, date } from 'yup';
import { useState } from 'react';
import {
  Container,
  Wrapper,
  Input,
  DatePick,
  Btn,
  BlockInput,
  Forms,
  InputFile,
} from './UserForm.styled';

import goose from '../../components/Header/goose.png';

const userSchema = object({
  username: string().max(16).required(),
  birthday: date().default(() => new Date()),
  email: string().email().required(),
  phone: number(),
  skype: string().max(16),
});

const UserForm = () => {
  const [birthday, setBirthday] = useState(new Date());
  const [file, setFile] = useState('');

  const initialValues = {
    username: '',
    email: '',
    phone: '',
    skype: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newValues = { ...values, file, birthday };
    console.log(newValues);
    resetForm();
  };

  const handleChange = eve => {
    setFile(eve.target.files[0]);
  };

  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={userSchema}
        >
          <Forms autoComplete="off" encType="multipart/from-data">
            <label htmlFor="file">
              <img src={goose} alt="goose" />

              <InputFile
                id="file"
                type="file"
                onChange={handleChange}
                accept="image/*,.png,.jpg,.gif,.web"
                name="file"
              ></InputFile>
            </label>

            <h1>Goose</h1>
            <p>User</p>

            <BlockInput>
              <label htmlFor="username">
                <p>User Name</p>
                <Input type="text" name="username"></Input>
                <ErrorMessage name="username" />
              </label>

              <label htmlFor="phone">
                <p>Phone</p>
                <Input type="tel" name="phone"></Input>
                <ErrorMessage name="phone" />
              </label>

              <label htmlFor="birthday">
                <p>Birthday</p>
                <DatePick
                  selected={birthday}
                  onChange={date => setBirthday(date)}
                  dateFormat="dd/MM/yyyy"
                />
                <ErrorMessage name="birthday" />
              </label>

              <label htmlFor="skype">
                <p>Skype</p>
                <Input type="text" name="skype"></Input>
                <ErrorMessage name="skype" />
              </label>

              <label htmlFor="email">
                <p>Email</p>
                <Input type="email" name="email"></Input>
                <ErrorMessage name="email" />
              </label>
            </BlockInput>
            <Btn type="submit">Save changes</Btn>
          </Forms>
        </Formik>
      </Wrapper>
    </Container>
  );
};
export default UserForm;
