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
} from './UserForm.styled';

const userSchema = object({
  username: string().max(16).required(),
  birthday: date().default(() => new Date()),
  email: string().email().required(),
  phone: number(),
  skype: string().max(16),
});

const UserForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const bDate = startDate;
  console.log(bDate);

  const initialValues = {
    username: '',
    email: '',
    phone: '',
    skype: '',
    file: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newValues = { ...values, startDate };
    console.log(newValues);

    resetForm();
  };

  const handleChange = eve => {
    console.log(111, eve.target.files[0]);
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
            <Input type="file" onChange={handleChange} name="file"></Input>

            <h1>Nadiia Doe</h1>
            <p>User</p>

            <BlockInput>
              <label htmlFor="username">
                <span>User Name</span>
                <Input type="text" name="username"></Input>
                <ErrorMessage name="username" />
              </label>

              <label htmlFor="phone">
                <span>Phone</span>
                <Input type="tel" name="phone"></Input>
                <ErrorMessage name="phone" />
              </label>

              <label htmlFor="birthday">
                <span>Birthday</span>
                <DatePick
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
                <ErrorMessage name="birthday" />
              </label>

              <label htmlFor="skype">
                <span>Skype</span>
                <Input type="text" name="skype"></Input>
                <ErrorMessage name="skype" />
              </label>

              <label htmlFor="email">
                <span>Email</span>
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
