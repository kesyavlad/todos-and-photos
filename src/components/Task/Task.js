import React from "react";
import "./Task.scss";
import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { NavLink } from "react-router-dom";
const Task = ({
  text,
  remove,
  markDone,
  status,
  setUpdateData,
  id,
  setShowUpdateInput,
  setDisableUpdate,
  disableUpdate,
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    // <div className={status ? "task" : "task done"}>

    <Grid
      container
      spacing={2}
      display="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        border: "1px",
        borderRadius: "10px",
        margin: "10px 0 15px 0",
        paddingLeft: "7px",
        boxShadow: "-5px -3px 10px rgba(0,0,0,0.5);",
      }}
    >
      <Grid>
        <NavLink key={id} to={`/todos/${id}`}>
          <Typography
            variant="subtitle1"
            style={{ wordBreak: "break-all", overflowX: "hidden" }}
          >
            {text}
          </Typography>
        </NavLink>
      </Grid>
      <Grid>
        <Checkbox
          {...label}
          color="default"
          onClick={() => {
            markDone(text);
          }}
          title="Done"
          disabled={disableUpdate}
        />
        {status ? (
          <IconButton
            aria-label="change"
            size="small"
            onClick={() =>
              setUpdateData(
                { id: id, input: text, status: status },
                setShowUpdateInput(true),
                setDisableUpdate(true)
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
            remove(text);
          }}
          title="Delete"
          disabled={disableUpdate}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Task;
