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

  width: 335px;
  height: 653px;

  background: #ffffff;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 854px;
  }
  @media screen and (min-width: 1440px) {
    width: 1087px;
    height: 752px;
  }
`;

export const Forms = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BlockInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  p {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
    min-height: 458px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    width: 758px;
    min-height: 264px;
  }
`;

export const Input = styled(Field)`
  width: 299px;
  height: 42px;

  padding-left: 18px;

  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(18 / 16);

  color: #343434;

  @media screen and (min-width: 768px) {
    width: 354px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DatePick = styled(DatePicker)`
  width: 299px;
  height: 42px;

  padding-left: 18px;

  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: calc(18 / 14);

  color: #343434;
  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
  }
  @media screen and (min-width: 1440px) {
  }
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

export const ImgAvatar = styled.img`
  text-align: center;

  width: 72px;
  height: 72px;

  border: 2px solid #3e85f3;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 14px;

    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 20px;
  }
`;

export const SvgAvatar = styled.svg`
  text-align: center;

  width: 72px;
  height: 72px;

  border: 2px solid #3e85f3;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 14px;

    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 60px;
    margin-bottom: 20px;
  }
`;

export const ImgBtn = styled.img`
  width: 24px;
  height: 24px;
`;

export const Container = styled.div`
  h2 {
    margin-bottom: 4px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;

    color: #343434;

    @media screen and (min-width: 768px) {
      margin-bottom: 8px;
    }
  }
`;

export const User = styled.p`
  margin-bottom: 40px;
  color: #343434;
`;

export const LabelImg = styled.label`
  position: absolute;
  left: 188px;
  top: 55px;

  @media screen and (min-width: 768px) {
    left: 200px;
    top: 143px;
  }
  @media screen and (min-width: 1440px) {
    left: 400px;
    top: 167px;
  }
`;

export const LabelBtn = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Btn = styled.button`
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

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 88px;
  }
`;
