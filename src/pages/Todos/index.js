import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskAction,
  deleteTaskAction,
  doneTaskAction,
  changeTaskAction,
  sortTaskAction,
} from "../../Redux/store/todoSlice";
import Task from "../../components/Task";
import { Container } from "@mui/material";
import InputUpdate from "../../components/InputUppdate";
import InputAdd from "../../components/InputAdd";
import FilterForm from "../../components/FilterForm";

const Todos = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.tasks);
  const [input, setInput] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [status, setStatus] = useState(true);
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [radioButton, setRadioButton] = useState("All");
  const addTask = () => {
    dispatch(addTaskAction({ input, status }));
    dispatch(sortTaskAction());
    setInput("");
  };
  const deleteTaskId = (id) => {
    dispatch(deleteTaskAction({ id }));
  };
  const markDone = (id) => {
    dispatch(doneTaskAction({ id }));
    dispatch(sortTaskAction());
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
    <Container maxWidth="md">
      {showUpdateInput ? (
        <InputUpdate
          changeTask={changeTask}
          updateData={updateData}
          updateTask={updateTask}
          disableButtonUpdate={updateData.input < 1}
          cancelUpdateData={cancelUpdateData}
        />
      ) : (
        <InputAdd
          setInput={setInput}
          input={input}
          addTask={addTask}
          disableButtonAdd={input.trim().length < 1}
        />
      )}
      <FilterForm radioButton={radioButton} setRadioButton={setRadioButton} />
      <br />
      {tasks && tasks.length ? "" : "No Tasks...."}
      <>
        {tasks
          .filter((task) => {
            if (String(task.status) === radioButton) {
              return task;
            } else if (radioButton === "All") {
              return task;
            }
            return false;
          })
          .map((taskText) => (
            <Task
              text={taskText.input}
              key={taskText.id}
              remove={() => deleteTaskId(taskText.id)}
              markDone={() => markDone(taskText.id)}
              status={taskText.status}
              setUpdateData={setUpdateData}
              id={taskText.id}
              setShowUpdateInput={setShowUpdateInput}
              setStatus={setStatus}
              cancelUpdateData={cancelUpdateData}
            />
          ))}
      </>
    </Container>
  );
};

export default Todos;
