import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/auth-operations';

import { Formik, ErrorMessage } from 'formik';
import { object, string, number, date } from 'yup';

import { selectUser } from 'redux/auth/auth-selectors';

// import moment from 'moment';

import { nanoid } from 'nanoid';

import plus from '../../images/plus.png';

import {
  Container,
  Wrapper,
  Input,
  DatePick,
  Btn,
  BlockInput,
  Forms,
  InputFile,
  ImgBtn,
  Avatar,
  LabelBtn,
  LabelImg,
} from './UserForm.styled';

const validationFormikSchema = object({
  username: string().max(16).required(),
  birthday: date().default(() => new Date()),
  email: string().email().required(),
  phone: number(),
  skype: string().max(16),
});

const UserForm = () => {
  const [birthday, setBirthday] = useState('');
  const [avatarURL, setAvatarURL] = useState('');

  const dispatch = useDispatch();
  const dataId = nanoid();
  const dataUser = useSelector(selectUser);
  console.log(dataUser);

  // const handleSubmit = (values, { resetForm }) => {
  //   const newValues = { ...values, avatarURL, birthday };
  //   console.log(newValues);
  //   resetForm();
  // };

  // const handleChange = eve => {
  //   setAvatarURL(eve.target.files[0]);
  // };

  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={{ username: '', email: '', phone: '', skype: '' }}
          onSubmit={(values, { resetForm }) => {
            // const newValues = { ...values, avatarURL, birthday };
            dispatch(
              updateUser({
                birthday,
                avatarURL,
                email: values.email,
                password: values.password,
                username: values.username,
                phone: values.phone,
              })
            );
            resetForm();
          }}
          validationSchema={validationFormikSchema}
        >
          {({ values, handleSubmit, handleBlur, handleChange }) => (
            <Forms autoComplete="off" onSubmit={handleSubmit}>
              <Avatar src={dataUser.user?.avatarURL} alt="" />
              <LabelImg htmlFor="file">
                <ImgBtn src={plus} alt="user" />
                <InputFile
                  id={dataId}
                  type="file"
                  onChange={data => setBirthday(data)}
                  accept="image/*,.png,.jpg,.gif,.web"
                  name="file"
                ></InputFile>
              </LabelImg>

              <h1>{dataUser.user?.name}</h1>
              <p>User</p>

              <BlockInput>
                <LabelBtn htmlFor="username">
                  <p>User Name</p>
                  <Input
                    type="text"
                    value={values.name}
                    placeholder={dataUser.user?.name}
                    name="username"
                    id={dataId}
                  ></Input>
                  <ErrorMessage name="username" />
                </LabelBtn>

                <LabelBtn htmlFor="phone">
                  <p>Phone</p>
                  <Input
                    type="tel"
                    name="phone"
                    id={dataId}
                    value={values.phone}
                  ></Input>
                  <ErrorMessage name="phone" />
                </LabelBtn>

                <LabelBtn htmlFor="birthday">
                  <p>Birthday</p>
                  <DatePick
                    name={birthday}
                    value={birthday}
                    id={dataId}
                    type="date"
                    input={true}
                    maxDate={new Date()}
                    selected={birthday}
                    onChange={data => setBirthday(data)}
                    // placeholderText={new Date()}
                    dateFormat="dd/MM/yyyy"
                  />
                  <ErrorMessage name="birthday" />
                </LabelBtn>

                <LabelBtn htmlFor="skype">
                  <p>Skype</p>
                  <Input
                    type="text"
                    name="skype"
                    id={dataId}
                    value={values.skype}
                    placeholder={dataUser.user?.skype}
                  ></Input>
                  <ErrorMessage name="skype" />
                </LabelBtn>

                <LabelBtn htmlFor="email">
                  <p>Email</p>
                  <Input
                    type="email"
                    name="email"
                    id={dataId}
                    onChange={handleChange}
                    placeholder={dataUser.user?.email}
                    value={values.email}
                  ></Input>
                  <ErrorMessage name="email" />
                </LabelBtn>
              </BlockInput>
              <Btn type="submit">Save changes</Btn>
            </Forms>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};
export default UserForm;
