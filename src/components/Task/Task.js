import React from "react";
import "./Task.scss";

const Task = ({
  text,
  remove,
  markDone,
  status,
  setUpdateData,
  id,
  setShowUpdateInput,
}) => {
  return (
    <div className={status ? "task__status" : "task__status done"}>
      {text}
      <button
        onClick={() => {
          markDone(text);
        }}
        className="task__button_done"
      >
        {status ? (
          <div className="task__button_done">Done</div>
        ) : (
          <div>return</div>
        )}
      </button>
      {status ? (
        <button
          className="task__button_change"
          onClick={() =>
            setUpdateData(
              { id: id, title: text, status: status },
              setShowUpdateInput(true)
            )
          }
        >
          change
        </button>
      ) : null}
      <button
        onClick={() => {
          remove(text);
        }}
        className="task__button_delete"
      >
        delete
      </button>
    </div>
  );
};

export default Task;
