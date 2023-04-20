import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useMedia } from 'react-use';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { Container, Image, H2, Wrapper, Motivation, Accent, Svg, Overlay, } from './Header.styled';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { SideBar } from 'components/SideBar/SideBar';
import goose from './goose.png';
import icon from '../../images/icons.svg';

// import { selectUser } from 'redux/auth/auth-selectors';

export const Header = () => {
  const location = useLocation();
  const isActivePageCalendar = location.pathname.includes('calendar');

  // TODO:
  // const todoList = useSelector(getTodoList);
  const todoList = useSelector(state => state);

  const isTabletOrMobile = useMedia('(max-width: 1439px)');

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarOpen = () => {setIsSidebarOpen(true);};
  const handleSidebarClose = () => {setIsSidebarOpen(false);};

  return (
      <Container>
        {isTabletOrMobile ? (
          <Wrapper>
            <Svg onClick={handleSidebarOpen}> <use href={icon + '#icon-menu'}></use></Svg>
            {isSidebarOpen && (<Overlay onClick={handleSidebarClose}> <SideBar/> </Overlay>)}
            <Wrapper>
              <ThemeToggler />
              <UserInfo />
            </Wrapper>
          </Wrapper>
        ) : (
          <Wrapper>
            {todoList.length > 0 && isActivePageCalendar ? (
              <Wrapper>
                <Image src={goose} alt="Goose"></Image>
                <div>
                  <H2>Calendar</H2>
                  <Motivation><Accent>Let go </Accent>of the past and focus on the present!</Motivation>
                </div>
              </Wrapper>
            ) : isActivePageCalendar ? (<H2>Calendar</H2>) : (<H2>User Profile</H2>)}
            <Wrapper>
              <ThemeToggler />
              <UserInfo />
            </Wrapper>
          </Wrapper>
        )}
      </Container>
  );
};
