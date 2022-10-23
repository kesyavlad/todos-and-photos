import React from "react";
import { Outlet, Link } from "react-router-dom";

import { AppBar, Box, Typography } from "@mui/material";

const Home = () => {
  const styles = {
    box: {
      display: "flex",
      justifyContent: "space-around",
      margin: "15px 0 15px 0",
    },
    link: {
      color: "white",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  };
  return (
    <>
      <AppBar position="static">
        <Box sx={styles.box}>
          <Link to="todos" style={{ textDecoration: "none" }}>
            <Typography sx={styles.link}>Todos</Typography>
          </Link>
          <Link to="images" style={{ textDecoration: "none" }}>
            <Typography sx={styles.link}>Images</Typography>
          </Link>
        </Box>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Home;
