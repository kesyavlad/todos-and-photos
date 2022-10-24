import React from "react";
import { Container, Typography } from "@mui/material";

const WelcomeText = () => {
  const welcomeText = "You need to make a choice Todos or Images";
  const style = {
    text: {
      wordBreak: "break-all",
      overflowX: "hidden",
      display: "flex",
      justifyContent: "center",
    },
  };
  return (
    <Container maxWidth="md">
      <Typography variant="h4" style={style.text}>
        {welcomeText}
      </Typography>
    </Container>
  );
};

export default WelcomeText;
