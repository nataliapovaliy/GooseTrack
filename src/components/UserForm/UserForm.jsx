import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Formik, ErrorMessage } from 'formik';
import { object, string, number, date } from 'yup';

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

import plus from '../../images/plus.png';
import { selectUser } from 'redux/auth/auth-selectors';

const validationFormikSchema = object({
  username: string().max(16).required(),
  birthday: date().default(() => new Date()),
  email: string().email().required(),
  phone: number(),
  skype: string().max(16),
});

const UserForm = () => {
  const [birthday, setBirthday] = useState(new Date());
  const [avatarURL, setAvatarURL] = useState('');

  const selector = useSelector(selectUser);

  const initialValues = {
    username: '',
    email: '',
    phone: '',
    skype: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newValues = { ...values, avatarURL, birthday };
    console.log(newValues);
    resetForm();
  };

  const handleChange = eve => {
    setAvatarURL(eve.target.files[0]);
  };

  return (
    <Container>
      <Wrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationFormikSchema}
        >
          <Forms autoComplete="off" encType="multipart/from-data">
            <Avatar src={selector.user?.avatarURL} alt="" />
            <LabelImg htmlFor="file">
              <ImgBtn src={plus} alt="user" />
              <InputFile
                id="file"
                type="file"
                onChange={handleChange}
                accept="image/*,.png,.jpg,.gif,.web"
                name="file"
              ></InputFile>
            </LabelImg>

            <h1>{selector.user?.name}</h1>
            <p>User</p>

            <BlockInput>
              <LabelBtn htmlFor="username">
                <p>User Name</p>
                <Input
                  type="text"
                  placeholder={selector.user?.name}
                  name="username"
                ></Input>
                <ErrorMessage name="username" />
              </LabelBtn>

              <LabelBtn htmlFor="phone">
                <p>Phone</p>
                <Input
                  type="tel"
                  name="phone"
                  placeholder={selector.user?.phone}
                ></Input>
                <ErrorMessage name="phone" />
              </LabelBtn>

              <LabelBtn htmlFor="birthday">
                <p>Birthday</p>
                <DatePick
                  selected={birthday}
                  onChange={date => setBirthday(date)}
                  dateFormat="dd/MM/yyyy"
                />
                <ErrorMessage name="birthday" />
              </LabelBtn>

              <LabelBtn htmlFor="skype">
                <p>Skype</p>
                <Input
                  type="text"
                  name="skype"
                  placeholder={selector.user?.skype}
                ></Input>
                <ErrorMessage name="skype" />
              </LabelBtn>

              <LabelBtn htmlFor="email">
                <p>Email</p>
                <Input
                  type="email"
                  name="email"
                  placeholder={selector.user?.email}
                ></Input>
                <ErrorMessage name="email" />
              </LabelBtn>
            </BlockInput>
            <Btn type="submit">Save changes</Btn>
          </Forms>
        </Formik>
      </Wrapper>
    </Container>
  );
};
export default UserForm;
