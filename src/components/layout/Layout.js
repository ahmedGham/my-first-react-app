import MainNavbar from "./MainNavbar";
import React from "react";
function Layout(props) {
  return (
    <React.Fragment>
      <MainNavbar />
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
