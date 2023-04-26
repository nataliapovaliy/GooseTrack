import styled from 'styled-components';

export const StyledInputText = styled.input`
  outline: none;
  border: 1px solid var(--border-input);
  background-color: var(--input-bcg-color);
  color: var(--modal-input-text-color);
  cursor: text;
  width: 100%;
  height: 46px;
  border-radius: 8px;
  padding: 0 18px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
`;

export const InputWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin-top: 18px;
`;

export const StyledLabel = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: var(--modal-input-lable-color);
`;

export const StyledInput = styled.input`
  outline: none;
  width: 163px;
  height: 46px;
  border: 1px solid var(--border-input);
  background-color: var(--input-bcg-color);
  color: var(--modal-input-text-color);
  cursor: text;
  padding: 0 18px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  border-radius: 8px;
  @media screen and (max-width: 375px) {
    width: 126px;
  }
`;
