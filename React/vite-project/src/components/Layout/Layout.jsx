import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { HomeMenu } from "../Const/HomeMenu";
// import { HomeMain } from "../Const/HomeMain";
export default function Layout() {
  return (
    <>
      <Header />
      <Navbar menuItems={HomeMenu} />
      <Outlet />
    </>
  );
}
