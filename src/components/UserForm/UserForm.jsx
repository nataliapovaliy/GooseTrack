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
  ImgAvatar,
  LabelBtn,
  LabelImg,
} from './UserForm.styled';

const validationFormikSchema = object({
  username: string().max(16).required(),
  birthday: date() /*.default(() => new Date()),*/,
  email: string().email().required(),
  phone: number(),
  skype: string().max(16),
});

const UserForm = () => {
  const [birthday, setBirthday] = useState(new Date());
  const [avatar, setAvatarURL] = useState('');
  console.log('avatar', avatar);

  const dispatch = useDispatch();
  const dataId = nanoid();
  const dataUser = useSelector(selectUser);

  console.log('dataUser', dataUser);

  // const handleSubmit = (values, { resetForm }) => {
  //   const newValues = { ...values, avatarURL, birthday };
  //   console.log(newValues);
  //   resetForm();
  // };

  const handleChange = eve => {
    setAvatarURL(eve.target.files[0]);
    console.log('avatar', eve.target.files[0]);
    console.log(eve);
  };

  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={{
            username: '',
            email: '',
            phone: '',
            skype: '',
            avatar,
            birthday,
          }}
          onSubmit={(values, { resetForm }) => {
            console.log('values', values);
            // const newValues = { ...values, avatar, birthday };
            // console.log('dispatch', newValues);
            dispatch(
              updateUser({
                username: values.name,
                email: values.email,
                phone: values.phone,
                skype: values.skype,
                avatar,
                birthday,
              })
            );
            resetForm();
          }}
          validationSchema={validationFormikSchema}
        >
          {({ values, handleSubmit, handleBlur }) => (
            <Forms autoComplete="off" onSubmit={handleSubmit}>
              <ImgAvatar src={avatar} alt="avatar" />

              <LabelImg htmlFor="avatar">
                <ImgBtn src={plus} alt="user" />

                <InputFile
                  id="file"
                  type="file"
                  onChange={handleChange}
                  accept="image/*,.png,.jpg,.gif,.web"
                  name="avatar"
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
                    id="username"
                  ></Input>
                  <ErrorMessage name="username" />
                </LabelBtn>

                <LabelBtn htmlFor="phone">
                  <p>Phone</p>
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    placeholder={dataUser.user?.phone}
                  ></Input>
                  <ErrorMessage name="phone" />
                </LabelBtn>

                <LabelBtn htmlFor="birthday">
                  <p>Birthday</p>
                  <DatePick
                    name="birthday"
                    id="date"
                    type="date"
                    input={true}
                    maxDate={new Date()}
                    selected={birthday}
                    onChange={data => setBirthday(data)}
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
                    id="email"
                    // onChange={handleChange}
                    // placeholder={dataUser.user?.email}
                    value={values.email}
                    onBlur={handleBlur}
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
