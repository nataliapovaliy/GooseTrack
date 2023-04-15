import styled from 'styled-components';
import { Field } from 'formik';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 335px;
  height: 653px;
  border: 2px solid red;

  background: #ffffff;
  border-radius: 16px;
`;

export const Input = styled(Field)`
  width: 299px;
  height: 42px;
`;

export const Container = styled.div`
  h1 {
    margin-top: 59px;
    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  label {
    margin-left: 20px;
  }

  button {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;

    width: 195px;
    height: 46px;

    border-radius: 16px;
    border: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: calc(18 / 14);

    background: #3e85f3;
    color: #ffffff;
  }
`;
