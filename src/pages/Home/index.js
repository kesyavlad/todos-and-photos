import React from "react";
import { Outlet } from "react-router-dom";

import { AppBar, Box, Link } from "@mui/material";
const Home = () => {
  const style = {
    box: {
      display: "flex",
      justifyContent: "space-around",
      margin: "15px 0 15px 0",
    },
  };
  return (
    <>
      <AppBar position="static">
        <Box sx={style.box}>
          <Link href="/todos" underline="hover" color="white">
            Todos
          </Link>
          <Link href="/images" underline="hover" color="white">
            Images
          </Link>
        </Box>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Home;
