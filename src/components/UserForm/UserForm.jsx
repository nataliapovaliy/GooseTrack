import { Formik, Form } from 'formik';
import { Container, Wrapper, Input } from './UserForm.styled';

const initialValues = {
  username: '',
  birthday: '',
  email: '',
  phone: '',
  skype: '',
};

const UserForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Container>
      <Wrapper>
        <h1>User Name</h1>
        <p>User</p>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form autoComplete="off">
            <label htmlFor="username">
              User Name
              <Input type="text" name="username"></Input>
            </label>

            <label htmlFor="birthday">
              Birthday
              <Input type="text" name="birthday"></Input>
            </label>

            <label htmlFor="email">
              Email
              <Input type="text" name="email"></Input>
            </label>

            <label htmlFor="phone">
              Phone
              <Input type="text" name="phone"></Input>
            </label>

            <label htmlFor="skype">
              Skype
              <Input type="text" name="skype"></Input>
            </label>

            <button type="submit">Save changes</button>
          </Form>
        </Formik>
      </Wrapper>
    </Container>
  );
};
export default UserForm;
