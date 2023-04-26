import {
  StyledInput,
  StyledInputText,
  InputWraper,
  StyledInputContainer,
  StyledLabel,
} from './Form.styled';

export const Form = ({
  inputHendler,
  enterTextTitle,
  startTitle,
  endTitle,
}) => {
  return (
    <form action="" autoComplete="off">
      <InputWraper>
        <StyledLabel htmlForm="">Title</StyledLabel>
        <StyledInputText
          placeholder="Enter text"
          type="text"
          name="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Text can contain a maximum of 250 characters"
          onChange={inputHendler}
          value={enterTextTitle}
        />
      </InputWraper>
      <StyledInputContainer>
        <InputWraper>
          <StyledLabel htmlFor="">Start</StyledLabel>
          <StyledInput
            type="text"
            name="start"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="The date must be in this format '00:00'"
            onChange={inputHendler}
            value={startTitle}
          />
        </InputWraper>
        <InputWraper>
          <StyledLabel htmlFor="">End</StyledLabel>
          <StyledInput
            type="text"
            name="end"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={inputHendler}
            value={endTitle}
          />
        </InputWraper>
      </StyledInputContainer>
    </form>
  );
};
