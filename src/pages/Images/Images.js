import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Images = () => {
  const [dataImage, setDataImage] = useState([]);
  const [inputNumber, setInputNumber] = useState("");

  const getPage = (number) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${number}`)
      .then(({ data }) => {
        setDataImage(data);
      });
  };
  const getPhoto = () => {
    getPage(inputNumber);
    setInputNumber("");
  };

  return (
    <>
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
              label="Input number page from 1 to 100"
              variant="outlined"
              type="number"
              onChange={(event) => setInputNumber(event.currentTarget.value)}
              fullWidth
              value={inputNumber}
              InputProps={{
                inputProps: {
                  max: 100,
                  min: 1,
                },
              }}
            />
          </Grid>
          <Grid item md={2}>
            <Button variant="contained" size="medium" onClick={getPhoto}>
              Get photos
            </Button>
          </Grid>
        </Grid>
      </Container>
      <ImageList sx={{ width: "100%", height: "100%" }} cols={4}>
        <>
          {dataImage.map((image) => (
            <ImageListItem key={image.id}>
              <img
                src={`${image.url}`}
                alt={`${image.title}?w=600&h=600&fit=crop&auto=format`}
                loading={"lazy"}
              />
            </ImageListItem>
          ))}
        </>
      </ImageList>
    </>
  );
};

export default Images;
