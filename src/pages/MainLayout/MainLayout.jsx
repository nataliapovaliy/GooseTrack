import { Header } from "components/Header/Header";
import { useMedia } from 'react-use';
import { SideBar } from "components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { Container, Wrapper } from './MainLayout.styled';

export const MainLayout = () => {
    const isTabletOrMobile = useMedia('(min-width: 1440px)');

  return (
    <Container>
      {isTabletOrMobile?<SideBar />:null}
        <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </Container>
  );
};