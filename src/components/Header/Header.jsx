import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { Container, Image, H2, Wrapper, Motivation, Accent, Svg, Overlay, } from './Header.styled';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { SideBar } from 'components/SideBar/SideBar';
import { selectArrTasks } from 'redux/tasks/tasks-selectors';
import { selectSideBar } from 'redux/modal/globalSelectors';
import { openSideBar } from 'redux/modal/globalSlice';
import goose from './goose.png';
import icon from '../../images/icons.svg';

export const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isActivePageCalendar = location.pathname.includes('calendar');

  const todoList = useSelector(selectArrTasks);
  const isTabletOrMobile = useMedia('(max-width: 1439px)');

  const openMobileMenu = () => dispatch(openSideBar());
  const sideBarState = useSelector(selectSideBar);

  // scroll lock, якщо Бургер активний + клас на Body в Global
  if (sideBarState) {
    document.body.classList.add('lock-scroll');
  } else {
    document.body.classList.remove('lock-scroll');
  }

  return (
    <Container>
      {isTabletOrMobile ? (
        <Wrapper>
          <Svg onClick={openMobileMenu}> <use href={icon + '#icon-menu'}></use> </Svg>
          <Overlay isVisible={sideBarState}> {sideBarState && <SideBar />} </Overlay>          
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
                <Motivation> <Accent>Let go </Accent>of the past and focus on the present!</Motivation>
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
