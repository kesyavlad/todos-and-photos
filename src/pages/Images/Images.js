import React, { useEffect, useState } from "react";
import { Button, Container, ImageList, ImageListItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Images = () => {
  const [dataImage, setDataImage] = useState([]);
  const [inputNumber, setInputNumber] = useState("");
  const [disable, setDisable] = useState(false);

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
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "baseline",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Input number page from 1 to 100"
          variant="outlined"
          type="number"
          onChange={(event) => setInputNumber(event.currentTarget.value)}
          style={{ width: "80%", marginTop: "15px" }}
          value={inputNumber}
          InputProps={{
            inputProps: {
              max: 100,
              min: 1,
            },
          }}
        />
        <Button
          variant="contained"
          size="medium"
          onClick={getPhoto}
          style={{ marginTop: "15px" }}
          disabled={disable}
        >
          Get photos
        </Button>
      </Container>
      <ImageList sx={{ width: "100%", height: "100%" }} cols={4}>
        {dataImage.map((image) => (
          <ImageListItem key={image.id}>
            <img
              src={`${image.url}`}
              alt={`${image.title}?w=600&h=600&fit=crop&auto=format`}
              loading={"lazy"}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Images;
