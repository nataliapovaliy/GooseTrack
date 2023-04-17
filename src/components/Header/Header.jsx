import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import goose from './goose.png';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import {
  Image,
  Container,
  H2,
  Wrapper,
  InnerWrapper,
  Motivation,
  Accent,
} from './Header.styled';

export const Header = () => {
  const location = useLocation();
  const isActivePageCalendar = location.pathname.includes('calendar');

  // TODO: перевірити селектор getTodoList
  // const getTodoList = useSelector(state => state.calendar.todo);
    const getTodoList = useSelector(state => state);

  return (
    <>
      <Container>
        <Wrapper>
          {getTodoList !== null && isActivePageCalendar ? (
          
          <InnerWrapper>
            <Image src={goose} alt="Goose"></Image>
            <div>
              <H2>Calendar</H2>
              <Motivation> <Accent>Let go </Accent>of the past and focus on the present!</Motivation>
            </div>
          </InnerWrapper>
          ) : isActivePageCalendar ? <H2>Calendar</H2> : <H2>User Profile</H2>} 

          <div>
            <ThemeToggler />
            <div>UserInfo</div>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};
