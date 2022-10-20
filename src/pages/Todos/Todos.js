import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskAction,
  changeTaskAction,
  deleteTaskAction,
  doneTaskAction,
} from "../../components/store/actions/tasks";
import Task from "../../components/Task/Task";
import "./Todos.scss";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";

const Todos = () => {
  const [input, setInput] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [status, setStatus] = useState(true);
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  useEffect(() => {
    input.trim().length > 0 ? setDisable(false) : setDisable(true);
  }, [input]);
  localStorage.setItem("task", JSON.stringify(tasks));
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
    <Container maxWidth="md">
      <div className="container__header" />
      {showUpdateInput ? (
        <div className="container__input">
          <TextField
            id="outlined-basic"
            label="Update task"
            variant="outlined"
            fullWidth
            onChange={(event) => changeTask(event)}
            value={updateData && updateData.input}
            style={{ width: "70%" }}
          />
          <Button
            variant="contained"
            color="success"
            onClick={updateTask}
            size="medium"
          >
            Update
          </Button>
          <Button variant="contained" color="error" onClick={cancelUpdateData}>
            Cancel
          </Button>
        </div>
      ) : (
        <div className="container__input">
          <TextField
            id="outlined-basic"
            label="New task"
            variant="outlined"
            onChange={(event) => setInput(event.target.value)}
            value={input}
            style={{ width: "80%" }}
          />
          <Button
            variant="contained"
            onClick={addTask}
            disabled={disable}
            title="Add new task"
          >
            ADD
          </Button>
        </div>
      )}

      <div className="todos">
        {/*<FormControl>*/}
        {/*  <FormLabel id="demo-row-radio-buttons-group-label">Filter</FormLabel>*/}
        {/*  <RadioGroup*/}
        {/*    row*/}
        {/*    aria-labelledby="demo-row-radio-buttons-group-label"*/}
        {/*    name="row-radio-buttons-group"*/}
        {/*  >*/}
        {/*    <FormControlLabel value="All" control={<Radio />} label="All" />*/}
        {/*    <FormControlLabel value="Done" control={<Radio />} label="Todo" />*/}
        {/*    <FormControlLabel*/}
        {/*      value="Not done"*/}
        {/*      control={<Radio />}*/}
        {/*      label="Done"*/}
        {/*    />*/}
        {/*  </RadioGroup>*/}
        {/*</FormControl>*/}

        {tasks
          .sort((a, b) => (a.status > b.status ? -1 : 1))
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
      {tasks && tasks.length ? "" : "No Tasks...."}
    </Container>
  );
};

export default Todos;
