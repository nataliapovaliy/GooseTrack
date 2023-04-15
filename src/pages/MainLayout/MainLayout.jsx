import { Header } from "components/Header/Header";
import { SideBar } from "components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { Container, Wrapper } from './MainLayout.styled';

export const MainLayout = () => {

  return (
    <Container>
      <SideBar />
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </Container>
  );
};