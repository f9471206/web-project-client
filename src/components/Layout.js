import Header from "./Header/index.js";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/index.js";
const Layout = ({ setData }) => {
  return (
    <>
      <Header setData={setData} />
      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
