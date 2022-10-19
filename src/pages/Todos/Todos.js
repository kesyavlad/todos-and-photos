import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskAction,
  changeTaskAction,
  deleteTaskAction,
  doneTaskAction,
} from "../../components/store/actions/tasks";
import Task from "../../components/Task/Task";
import "./Todos.scss";

const Todos = () => {
  const [input, setInput] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [status, setStatus] = useState(true);
  const [showUpdateInput, setShowUpdateInput] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      input,
      status,
    };
    dispatch(addTaskAction(newTask));
    setInput("");
  };
  const deleteTask = (id) => {
    dispatch(deleteTaskAction(id));
  };
  const markDone = (id) => {
    dispatch(doneTaskAction(id));
  };
  const cancelUpdateData = () => {
    setUpdateData("");
    setShowUpdateInput(false);
  };
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      input: e.target.value,
      status: updateData.status,
    };
    setUpdateData(newEntry);
  };
  const updateTask = () => {
    dispatch(changeTaskAction(updateData));
    setShowUpdateInput(false);
  };
  return (
    <div className="container">
      <div className="container__header" />
      {showUpdateInput ? (
        <>
          <input
            type="text"
            className="container__input"
            onChange={(event) => changeTask(event)}
            value={updateData && updateData.title}
          />
          <button onClick={updateTask}>Update</button>
          <button onClick={cancelUpdateData}>Cancel</button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="container__input"
            onChange={(event) => setInput(event.target.value)}
            value={input}
          />
          <button className="container__button" onClick={addTask}>
            add
          </button>
        </>
      )}
      {tasks && tasks.length ? "" : "No Tasks...."}

      <div className="todos">
        {tasks
          .sort((a, b) => {
            if (a.status > b.status) {
              return -1;
            } else if (a.status < b.status) {
              return 1;
            }
            return 0;
          })
          .map((taskText) => (
            <Task
              text={taskText.input}
              key={taskText.id}
              remove={() => deleteTask(taskText.id)}
              markDone={() => markDone(taskText.id)}
              status={taskText.status}
              setUpdateData={setUpdateData}
              id={taskText.id}
              setShowUpdateInput={setShowUpdateInput}
            />
          ))}
      </div>
    </div>
  );
};

export default Todos;
