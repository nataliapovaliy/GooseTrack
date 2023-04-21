import { Header } from "components/Header/Header";
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import { SideBar } from "components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { Container, Wrapper } from './MainLayout.styled';
import { selectSideBar } from "redux/modal/globalSelectors";

export const MainLayout = () => {
  const isTabletOrMobile = useMedia('(min-width: 1440px)');
  const sideBarState = useSelector(selectSideBar);

  return (
    <Container>
      {isTabletOrMobile && !sideBarState ? <SideBar /> : null}
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </Container>
  );
};