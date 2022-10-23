import React from "react";
import { Checkbox, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { Link } from "react-router-dom";
const Task = ({
  text,
  remove,
  markDone,
  status,
  setUpdateData,
  id,
  setShowUpdateInput,
  cancelUpdateData,
}) => {
  const customDesign = !status
    ? { textDecoration: " line-through", opacity: "0.3" }
    : { textDecoration: "none", opacity: "1" };
  const styles = {
    box: {
      border: "1px",
      borderRadius: "10px",
      margin: "10px 0 15px 0",
      paddingLeft: "7px",
      boxShadow: "-5px -3px 10px rgba(0,0,0,0.5);",
      opacity: customDesign.opacity,
      textDecoration: customDesign.textDecoration,
    },
    link: {
      color: "black",
      textDecoration: "none",
      wordBreak: "break-all",
      overflowX: "hidden",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  };
  return (
    <Grid
      container
      spacing={2}
      display="row"
      justifyContent="space-between"
      alignItems="center"
      sx={styles.box}
    >
      <Grid md={10} xs={10}>
        <Link key={id} to={`/todos/${id}`} style={{ textDecoration: "none" }}>
          <Typography variant="subtitle1" sx={styles.link}>
            {text}
          </Typography>
        </Link>
      </Grid>

      <Grid md={2} xs={12}>
        <Grid container display="row" justifyContent="flex-end">
          <Checkbox
            color="default"
            onClick={() => {
              markDone(text);
            }}
            title="Done"
            checked={!status}
          />
          {status ? (
            <IconButton
              aria-label="change"
              size="small"
              onClick={() =>
                setUpdateData(
                  { id: id, input: text, status: status },
                  setShowUpdateInput(status)
                )
              }
              title="Update"
            >
              <BorderColorOutlinedIcon />
            </IconButton>
          ) : null}
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => {
              cancelUpdateData();
              remove(text);
            }}
            title="Delete"
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Task;
