import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

const ListImages = ({ dataImage }) => {
  return (
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
  );
};

export default ListImages;
