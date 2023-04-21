import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import {
  LoginFormContainer,
  Wrapper,
  Form,
  LoginFormTitle,
  LoginLabel,
  LoginButton,
  LoginInput,
  LoginParaghraph,
  ErrorMessage,
  LinkToRegister,
  ButtonText,
  Svg,
  LoginGooseImage,
} from './LoginForm.styled';
import icons from 'images/icons.svg';
import GooseLogIn from 'images/goose-login.png';
import GooseLogIn2x from 'images/goose-login@2x.png';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Password must be at most 16 characters')
    .required('Password is a required field'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          login({
            email: values.email,
            password: values.password,
          })
        );
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {({
        errors,
        touched,
        values,
        handleSubmit,
        handleBlur,
        handleChange,
        isSubmitting,
      }) => (
        <Wrapper>
          <LoginFormContainer>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <LoginFormTitle>Log in</LoginFormTitle>
              <LoginLabel htmlFor={emailId}>
                <LoginParaghraph>Email</LoginParaghraph>
                <LoginInput
                  type="email"
                  name="email"
                  id={emailId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email"
                />
              </LoginLabel>
              <ErrorMessage>
                {errors.email && touched.email && errors.email}
              </ErrorMessage>
              <LoginLabel htmlFor={passwordId}>
                <LoginParaghraph>Password</LoginParaghraph>
                <LoginInput
                  type="password"
                  name="password"
                  id={passwordId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                />
              </LoginLabel>
              <ErrorMessage>
                {errors.password && touched.password && errors.password}
              </ErrorMessage>
              <LoginButton type="submit" disabled={isSubmitting}>
                <ButtonText>Log in</ButtonText>{' '}
                <Svg>
                  <use href={`${icons}#icon-log-in`} />
                </Svg>
              </LoginButton>
            </Form>
            <Link to="/register">
              <LinkToRegister>Sign up</LinkToRegister>
            </Link>
            <LoginGooseImage
              srcset={`${GooseLogIn} 1x, ${GooseLogIn2x} 2x`}
              src={`${GooseLogIn}`}
              alt="goose"
            />
          </LoginFormContainer>
        </Wrapper>
      )}
    </Formik>
  );
};
