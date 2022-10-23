import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskAction,
  deleteTaskAction,
  doneTaskAction,
  changeTaskAction,
  sortTaskAction,
} from "../../components/store/todoSlice";
import Task from "../../components/Task/Task";
import { Container } from "@mui/material";
import InputUpdate from "../../components/InputUppdate/inputUpdate";
import InputAdd from "../../components/InputAdd/InputAdd";
import FilterForm from "../../components/FilterForm/FilterForm";

const Todos = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.tasks);
  const [input, setInput] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [status, setStatus] = useState(true);
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [disableButtonAdd, setDisableButtonAdd] = useState(true);
  const [disableIconTrash, setDisableIconTrash] = useState(false);
  const [disableButtonUpdate, setDisableButtonUpdate] = useState(false);
  const [radioButton, setRadioButton] = useState("All");

  useEffect(() => {
    input.trim().length > 0
      ? setDisableButtonAdd(false)
      : setDisableButtonAdd(true);
  }, [input]);
  useEffect(() => {
    if (updateData.input < 1) {
      setDisableButtonUpdate(true);
    } else {
      setDisableButtonUpdate(false);
    }
  }, [updateData.input]);
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
    setDisableIconTrash(false);
  };
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      input: e.target.value,
      status: updateData.status,
    };
    setDisableIconTrash(true);
    setUpdateData(newEntry);
  };
  const updateTask = () => {
    dispatch(changeTaskAction(updateData));
    setShowUpdateInput(false);
    setDisableIconTrash(false);
  };

  return (
    <Container maxWidth="md">
      {showUpdateInput ? (
        <InputUpdate
          changeTask={changeTask}
          updateData={updateData}
          updateTask={updateTask}
          disableButtonUpdate={disableButtonUpdate}
          cancelUpdateData={cancelUpdateData}
        />
      ) : (
        <InputAdd
          setInput={setInput}
          input={input}
          addTask={addTask}
          disableButtonAdd={disableButtonAdd}
        />
      )}
      <FilterForm setRadioButton={setRadioButton} />
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
              setDisableIconTrash={setDisableIconTrash}
              disableIconTrash={disableIconTrash}
              setStatus={setStatus}
            />
          ))}
      </>
    </Container>
  );
};

export default Todos;
