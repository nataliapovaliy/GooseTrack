import {
  StyledInput,
  StyledInputText,
  InputWraper,
  StyledInputContainer,
  StyledLabel,
} from './Form.styled';

export const Form = ({ inputHendler, enterText, start, end }) => {
  return (
    <form action="">
      <InputWraper>
        <StyledLabel htmlFor="">Title</StyledLabel>
        <StyledInputText
          placeholder="Enter text"
          type="text"
          name="text"
          onChange={inputHendler}
          value={enterText}
        />
      </InputWraper>
      <StyledInputContainer>
        <InputWraper>
          <StyledLabel htmlFor="">Start</StyledLabel>
          <StyledInput
            type="text"
            name="start"
            onChange={inputHendler}
            value={start}
          />
        </InputWraper>
        <InputWraper>
          <StyledLabel htmlFor="">End</StyledLabel>
          <StyledInput
            type="text"
            name="end"
            onChange={inputHendler}
            value={end}
          />
        </InputWraper>
      </StyledInputContainer>
    </form>
  );
};
