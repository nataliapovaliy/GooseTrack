import {
  StyledInput,
  StyledInputText,
  InputWraper,
  StyledInputContainer,
  StyledLabel,
} from './Form.styled';

export const Form = ({
  titleSetter,
  startSetter,
  endSetter,
  editText,
  startText,
  endText,
}) => {
  return (
    <form action="" autoComplete="off">
      <InputWraper>
        <StyledLabel htmlFor="">Title</StyledLabel>
        <StyledInputText
          placeholder="Enter text"
          type="text"
          name="text"
          onChange={titleSetter}
          value={editText}
        />
      </InputWraper>
      <StyledInputContainer>
        <InputWraper>
          <StyledLabel htmlFor="">Start</StyledLabel>
          <StyledInput
            type="text"
            name="start"
            onChange={startSetter}
            value={startText}
          />
        </InputWraper>
        <InputWraper>
          <StyledLabel htmlFor="">End</StyledLabel>
          <StyledInput
            type="text"
            name="end"
            onChange={endSetter}
            value={endText}
          />
        </InputWraper>
      </StyledInputContainer>
    </form>
  );
};
