import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Formik, ErrorMessage } from 'formik';
import { object, string, date } from 'yup';

import { selectUser } from 'redux/auth/auth-selectors';

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
  username: string().max(16).required(),
  birthday: date() /*.default(() => new Date()),*/,
  email: string().email().required(),
  skype: string().max(16),
});

const UserForm = () => {
  const [birthday, setBirthday] = useState(new Date());
  const [avatarURL, setAvatarURL] = useState('');

  const { user } = useSelector(selectUser);

  return (
    <Container>
      <Wrapper>
        <Formik
          enableReinitialize={true}
          initialValues={{
            username: user ? user.name : '',
            email: user ? user.email : '',
            phone: user ? user.phone : '',
            skype: user ? user.skype : '',
            birthday: user ? user.birthday : '',
          }}
          onSubmit={async values => {
            const newAvatar = new FormData();
            newAvatar.append('avatar', avatarURL);

            //TODO Некорректно отображается дата. Подготовить корректный запрос для бэкенда.

            const newValues = { ...values, birthday };
            console.log('values', newValues);
            await new Promise(r => setTimeout(r, 500));
            alert(JSON.stringify(newValues, null, 2));
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
                <LabelBtn htmlFor="username">
                  <p>User Name</p>
                  <Input
                    type="text"
                    value={values.username}
                    name="username"
                    id="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={'Name'}
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
                    placeholder={'+380'}
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
                    // id={dataId}
                    value={values.skype}
                    placeholder={'Skype'}
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
                    placeholder={'Email'}
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
