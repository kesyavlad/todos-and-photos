import React from "react";
import "./Task.scss";
import { Checkbox, IconButton } from "@mui/material";
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
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className={status ? "task" : "task done"}>
      <div className="inside_block">
        <div className="inside_block_text">{text}</div>
        <div className="inside_block_icon">
          <Checkbox
            {...label}
            color="default"
            onClick={() => {
              markDone(text);
            }}
          />
          {status ? (
            <IconButton
              aria-label="change"
              size="small"
              onClick={() =>
                setUpdateData(
                  { id: id, input: text, status: status },
                  setShowUpdateInput(true)
                )
              }
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
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Task;
