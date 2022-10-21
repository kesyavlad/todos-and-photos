import React from "react";
import { Checkbox, Grid, IconButton, Typography, Link } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

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
  const customDesign = !status
    ? { textDecoration: " line-through", opacity: "0.3" }
    : { textDecoration: "none", opacity: "1" };

  return (
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
        opacity: customDesign.opacity,
        textDecoration: customDesign.textDecoration,
      }}
    >
      <Grid md={10} xs={9}>
        <Link key={id} href={`/#/todos/${id}`} underline="hover">
          <Typography
            variant="subtitle1"
            style={{ wordBreak: "break-all", overflowX: "hidden" }}
          >
            {text}
          </Typography>
        </Link>
      </Grid>

      <Grid md={2} xs={3}>
        <Grid container display="row" justifyContent="flex-end">
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
    </Grid>
  );
};

export default Task;
