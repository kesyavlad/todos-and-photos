import React from "react";
import { Button, Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

const InputNumberImages = ({
  inputNumber,
  setInputNumber,
  inputError,
  getPhoto,
}) => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "15px" }}
      >
        <Grid item md={10} xs={12}>
          <TextField
            id="outlined-basic"
            label="Enter number page from 1 to 100"
            variant="outlined"
            type="number"
            value={inputNumber}
            onChange={(event) => setInputNumber(event.currentTarget.value)}
            fullWidth
            InputProps={{
              inputProps: {
                max: 100,
                min: 1,
              },
            }}
            error={inputError}
          />
        </Grid>

        <Grid item md={2}>
          <Button variant="contained" size="medium" onClick={getPhoto}>
            Get photos
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InputNumberImages;
