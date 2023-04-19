import {
  StyledInput,
  StyledInputText,
  InputWraper,
  StyledInputContainer,
  StyledLabel,
} from './Form.styled';

export const Form = ({ inputHendler, enterText, hours, minutes }) => {
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
            type="number"
            name="hours"
            onChange={inputHendler}
            value={hours}
          />
        </InputWraper>
        <InputWraper>
          <StyledLabel htmlFor="">End</StyledLabel>
          <StyledInput
            type="number"
            name="minutes"
            onChange={inputHendler}
            value={minutes}
          />
        </InputWraper>
      </StyledInputContainer>
    </form>
  );
};
