import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Formik } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import { selectError } from 'redux/auth/auth-selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Wrapper,
  RegisterButton,
  RegisterFormContainer,
  RegisterFormTitle,
  Form,
  RegisterInput,
  RegisterLabel,
  RegisterParaghraph,
  LinkToLogin,
  ErrorMessage,
} from './RegisterForm.styled';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(1)
    .max(12, 'First name must be at most 12 characters')
    .required('Please enter your name'),
  email: yup
    .string()
    .email('E-mail must be valid email')
    .required('E-mail is a required field'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Password is a required field'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const passwordId = nanoid();
  const nameId = nanoid();
  const error = useSelector(selectError);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          register({
            name: values.name,
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
          <RegisterFormContainer>
            <Form>
              <ToastContainer />
              <RegisterFormTitle>Sign Up</RegisterFormTitle>
              <RegisterLabel htmlFor={nameId}>
                <RegisterParaghraph>Name</RegisterParaghraph>
                <RegisterInput
                  type="text"
                  name="name"
                  id={nameId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Enter your name"
                />
              </RegisterLabel>
              <ErrorMessage>{errors.name && touched.name && errors.name}</ErrorMessage>
              <RegisterLabel htmlFor={emailId}>
                <RegisterParaghraph>Email</RegisterParaghraph>
                <RegisterInput
                  type="email"
                  name="email"
                  id={emailId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email"
                />
              </RegisterLabel>
              <ErrorMessage>{errors.email && touched.email && errors.email}</ErrorMessage>
              <RegisterLabel htmlFor={passwordId}>
                <RegisterParaghraph>Password</RegisterParaghraph>
                <RegisterInput
                  type="password"
                  name="password"
                  id={passwordId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                />
              </RegisterLabel>
              <ErrorMessage>
                {errors.password && touched.password && errors.password}
              </ErrorMessage>
              <RegisterButton type="submit" disabled={isSubmitting}>
                Sign Up
              </RegisterButton>
            </Form>
            <Link to="/login">
              <LinkToLogin>Log in</LinkToLogin>
            </Link>
          </RegisterFormContainer>
        </Wrapper>
      )}
    </Formik>
  );
};
