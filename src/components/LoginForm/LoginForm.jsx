import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { selectError } from 'redux/auth/auth-selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
} from './LoginForm.styled';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Password is a required field'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();
  const error = useSelector(selectError);

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
        if (error) {
          toast.error('Oops...something is wrong, try again!');
        }
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
              <ToastContainer />
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
                Log in
              </LoginButton>
            </Form>
          </LoginFormContainer>
          <Link to="/register">
            <LinkToRegister>Sign up</LinkToRegister>
          </Link>
        </Wrapper>
      )}
    </Formik>
  );
};
