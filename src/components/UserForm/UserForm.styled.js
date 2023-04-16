import styled from 'styled-components';
import { Field } from 'formik';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Wrapper = styled.div`
  position: relative;
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

export const DatePick = styled(DatePicker)`
  width: 299px;
  height: 42px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);

  color: #111111;
`;

export const InputFile = styled.input`
background-color: aqua;

`

export const Container = styled.div`
  img {
    position: absolute;
    width: 72px;
    height: 72px;
    left: 128px;
    top: -35px;

    border: 2px solid #3e85f3;
    border-radius: 50%;
  }

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
`;

export const Btn = styled.button`
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
`;
