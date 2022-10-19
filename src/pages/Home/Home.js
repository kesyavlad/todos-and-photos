import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="Navigation">
        <NavLink to="todos" className="Navigation__Button">
          todos
        </NavLink>
        <NavLink to="photos" className="Navigation__Button">
          Images
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
