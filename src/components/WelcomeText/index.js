import React from "react";
import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

const WelcomeText = () => {
  const welcomeText = "You need to make a choice Todos or Images";
  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width:415px)": {
      fontSize: "1rem",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };
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
      <ThemeProvider theme={theme}>
        <Typography variant="h3" style={style.text} mt={3}>
          {welcomeText}
        </Typography>
      </ThemeProvider>
    </Container>
  );
};

export default WelcomeText;
