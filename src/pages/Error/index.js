import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Error = () => {
  const style = {
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflowY: "hidden",
      height: "80vh",
    },
  };
  return (
    <Box sx={style.box}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid xs={12}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt="Error 404"
              width="100%"
              height={250}
            />
          </Grid>
          <Grid xs={12}>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Link href="/" underline="hover">
              Back Home
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Error;
