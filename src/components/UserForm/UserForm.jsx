import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Formik, ErrorMessage } from 'formik';
import { object, string, date } from 'yup';

import { selectUser } from 'redux/auth/auth-selectors';
import { updateUser } from 'redux/auth/auth-operations';

import plus from '../../images/plus.png';
import icon from '../../images/icons.svg';

//TODO изменить стили для темного экрана

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
  User,
  SvgAvatar,
} from './UserForm.styled';

//TODO Валидация: номер телефона

const validationFormikSchema = object({
  name: string().max(16).required(),
  birthday: date() /*.default(() => new Date()),*/,
  email: string().email().required(),
  skype: string().max(16),
});

const UserForm = () => {
  const [birthday, setBirthday] = useState(new Date());
  const [avatarURL, setAvatarURL] = useState(null);

  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: user ? user.name : '',
            email: user ? user.email : '',
            phone: user ? user.phone : '',
            skype: user ? user.skype : '',
            // birthday: user ? user.birthday : '',
          }}
          onSubmit={(values, { resetForm }) => {
            // console.log('avatarURL----->', avatarURL);

            // const formData = new FormData();
            // formData.append('avatar', avatarURL);
            // const newValues = { ...values, birthday };
            //TODO Некорректно отображается дата. Подготовить корректный запрос для бэкенда.

            // console.log('values', newValues);

            dispatch(
              updateUser({
                name: values.name,
                email: values.email,
                phone: values.phone,
                skype: values.skype,
              })
            );
            resetForm();
          }}
          validationSchema={validationFormikSchema}
        >
          {({ values, handleSubmit, handleChange, handleBlur }) => (
            <Forms autoComplete="off" onSubmit={handleSubmit}>
              {avatarURL ? (
                <ImgAvatar src={URL.createObjectURL(avatarURL)} alt="avatar" />
              ) : user ? (
                <ImgAvatar src={user.avatarURL} alt="avatar" />
              ) : (
                //TODO размер svg изображения
                <SvgAvatar>
                  <use href={icon + '#icon-ph-user'}></use>
                </SvgAvatar>
              )}

              <LabelImg htmlFor="avatar">
                <ImgBtn src={plus} alt="user" />

                <InputFile
                  id="avatar"
                  type="file"
                  onChange={event => setAvatarURL(event.target.files[0])}
                  accept="image/*,.png,.jpg,.gif,.web"
                  name="avatar"
                ></InputFile>
              </LabelImg>

              <h2>{user?.name ?? ' '} </h2>
              <User>User</User>

              <BlockInput>
                <LabelBtn htmlFor="name">
                  <p>User Name</p>
                  <Input
                    type="text"
                    value={values.name}
                    name="name"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Name"
                  ></Input>
                  <ErrorMessage name="name" />
                </LabelBtn>

                <LabelBtn htmlFor="phone">
                  <p>Phone</p>
                  <Input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onBlur={handleBlur}
                    placeholder="+380"
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
                    id="skype"
                    value={values.skype}
                    onBlur={handleBlur}
                    placeholder="Skype"
                  ></Input>
                  <ErrorMessage name="skype" />
                </LabelBtn>

                <LabelBtn htmlFor="email">
                  <p>Email</p>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    placeholder="Email"
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
