import React from "react";
import "./Task.scss";
import { Checkbox, IconButton } from "@mui/material";
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
  setDisableUpdate,
  disableUpdate,
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className={status ? "task" : "task done"}>
      <div className="inside_block">
        <Link key={id} to={`/todos/${id}`} underline="hover">
          {text}
        </Link>
        <div className="inside_block_icon">
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
        </div>
      </div>
    </div>
  );
};

export default Task;
