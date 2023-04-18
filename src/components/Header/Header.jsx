import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import goose from './goose.png';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import {
  Image,
  H2,
  Wrapper,
  InnerWrapper,
  Motivation,
  Accent,
  Name,
  Avatar,
  AvatarLetter,
  AvatarImg
} from './Header.styled';
// import { selectUser } from 'redux/auth/auth-selectors';

export const Header = () => {
  const location = useLocation();
  const isActivePageCalendar = location.pathname.includes('calendar');

  // TODO:
  // const todoList = useSelector(getTodoList);
  const todoList = useSelector(state => state);

  // TODO:
  // const avatar = useSelector(getUserAvatar);
  const avatar = 'https://img.icons8.com/officel/32/null/avatar.png'; // временно для теста

  // TODO:
  // const userName = useSelector(selectUser);
  const userName = 'Tom'; // временно для теста
  const firstLetter = userName.slice(0, 1).toUpperCase();

  return (
    <>
      <Wrapper>
        {todoList !== null && isActivePageCalendar ? (
          <InnerWrapper>
            <Image src={goose} alt="Goose"></Image>
            <div>
              <H2>Calendar</H2>
              <Motivation><Accent>Let go </Accent>of the past and focus on the present!</Motivation>
            </div>
          </InnerWrapper>
        ) : isActivePageCalendar ? (<H2>Calendar</H2>) : (<H2>User Profile</H2>)}
        <InnerWrapper>
          <ThemeToggler />
          <Name>{userName}</Name>
          <Avatar>{avatar === null ? (<AvatarLetter>{firstLetter}</AvatarLetter>) : (<AvatarImg src={avatar} alt="Avatar" />)}</Avatar>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};
