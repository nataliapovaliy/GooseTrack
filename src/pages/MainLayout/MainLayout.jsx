import { Header } from "components/Header/Header";
import { SideBar } from "components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {

  return (
    <>
      <div>
        <SideBar />
        <div>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};