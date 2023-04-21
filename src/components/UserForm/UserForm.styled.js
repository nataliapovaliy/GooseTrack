import styled from 'styled-components';
import { Field, Form } from 'formik';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-left: auto;
  margin-right: auto;

  width: 1087px;
  height: 752px;

  background: #ffffff;
  border-radius: 16px;
`;

export const Forms = styled(Form)`
  position: relative;
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

  color: #343434;
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

  color: #343434;
`;

export const InputFile = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

export const Avatar = styled.img`
  margin-top: 60px;
  width: 124px;
  height: 124px;

  text-align: center;

  border: 2px solid #3e85f3;
  border-radius: 50%;
`;

export const ImgBtn = styled.img`
  width: 24px;
  height: 24px;
`;

export const Container = styled.div`
  h1 {
    margin-top: 20px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;

    color: #343434;
  }

  p {
    margin-bottom: 40px;
    color: #343434;
  }
`;

export const LabelImg = styled.label`
  position: absolute;
  left: 400px;
  top: 167px;
`;

export const LabelBtn = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const BlockInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 758px;
  height: 264px;

  p {
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
