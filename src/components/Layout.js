import Nav from "./nav-components";
import { Outlet } from "react-router-dom";
import FooterComponents from "./footer-components";
const Layout = ({ setData }) => {
  return (
    <>
      <Nav setData={setData} />
      <div className="page-content">
        <Outlet />
      </div>
      <FooterComponents />
    </>
  );
};

export default Layout;
