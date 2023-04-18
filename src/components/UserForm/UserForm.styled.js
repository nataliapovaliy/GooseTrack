import styled from 'styled-components';
import { Field, Form } from 'formik';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  margin-left: auto;
  margin-right: auto;

  width: 1087px;
  height: 752px;

  background: #ffffff;
  border-radius: 16px;
`;

export const Forms = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled(Field)`
  width: 354px;
  height: 46px;

  padding-left: 18px;

  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(18 / 16);

  color: #111111;
`;

export const DatePick = styled(DatePicker)`
  width: 354px;
  height: 46px;

  padding-left: 18px;

  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);

  color: #111111;
`;

export const InputFile = styled.input`
  width: 24px;
  height: 24px;

  border-radius: 50%;

  background: #3e85f3;
`;

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

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;

    color: #343434;
  }
  p {
    margin-bottom: 40px;
  }

  label {
    display: flex;
    flex-direction: column;

    margin-bottom: 24px;
  }
`;

export const BlockInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 758px;
  height: 264px;

  span {
    margin-bottom: 8px;
  }
`;

export const Btn = styled.button`
  margin-top: 88px;
  margin-left: auto;
  margin-right: auto;

  padding: 0;

  width: 195px;
  height: 46px;

  border-radius: 16px;
  border: none;

  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);

  background: #3e85f3;
  color: #ffffff;
`;
