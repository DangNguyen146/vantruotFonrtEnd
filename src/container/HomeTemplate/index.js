import React from "react";
import { Route } from "react-router-dom";
import SanPhamMua from "../../components/SanPhamMua";
import NavbarHome from "./../../components/Navbar";

function HomeLayout(props) {
  return (
    <div>
      <NavbarHome />
      <SanPhamMua />
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
