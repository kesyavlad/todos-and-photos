import React, { useState } from "react";
import axios from "axios";
import InputNumberImages from "../../components/InputNumberImages";
import ListImages from "../../components/ListImages";

const Images = () => {
  const [dataImage, setDataImage] = useState([]);
  const [inputNumber, setInputNumber] = useState("");
  const [inputError, setInputError] = useState(false);
  const [albumId, setAlbumId] = useState();

  const getPage = (number) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${number}`)
      .then(({ data }) => {
        setDataImage(data);
        setAlbumId(number);
      });
  };
  const getPhoto = () => {
    if (inputNumber >= 1 && inputNumber <= 100) {
      getPage(inputNumber);
      setInputNumber("");
      setInputError(false);
    } else {
      setInputError(true);
    }
  };
  return (
    <>
      <InputNumberImages
        inputNumber={inputNumber}
        setInputNumber={setInputNumber}
        inputError={inputError}
        getPhoto={getPhoto}
        disableButtonGet={albumId === inputNumber}
      />
      <ListImages dataImage={dataImage} />
    </>
  );
};

export default Images;
