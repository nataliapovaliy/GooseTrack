import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { Container, H2, Wrapper } from './Header.styled';

export const Header = () => {

  return (
    <>
      <Container>
        <Wrapper>
          <H2>Calendar</H2>

          <div>
            <ThemeToggler/>
            <div>UserInfo</div>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};
