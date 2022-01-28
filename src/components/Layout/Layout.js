import React, { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className="content font-moch overflow-x-hidden">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
