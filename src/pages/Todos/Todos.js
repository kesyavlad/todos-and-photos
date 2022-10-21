import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskAction,
  changeTaskAction,
  deleteTaskAction,
  doneTaskAction,
} from "../../components/store/actions/tasks";
import Task from "../../components/Task/Task";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid } from "@mui/material";

const Todos = () => {
  const [input, setInput] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [status, setStatus] = useState(true);
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [disable, setDisable] = useState(true);
  const [disableUpdate, setDisableUpdate] = useState(false);
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
    setDisableUpdate(false);
  };
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      input: e.target.value,
      status: updateData.status,
    };
    setDisableUpdate(true);
    setUpdateData(newEntry);
  };
  const updateTask = () => {
    dispatch(changeTaskAction(updateData));
    setShowUpdateInput(false);
    setDisableUpdate(false);
  };

  return (
    <Container maxWidth="md">
      {showUpdateInput ? (
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Grid item xs={12} md={9}>
            <TextField
              id="outlined-basic"
              label="Update task"
              variant="outlined"
              fullWidth
              onChange={(event) => changeTask(event)}
              value={updateData && updateData.input}
            />
          </Grid>
          <Grid item md={3}>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="flex-end"
            >
              <Grid item md={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={updateTask}
                  size="medium"
                >
                  Update
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={cancelUpdateData}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <Grid item xs={12} md={11}>
            <TextField
              id="outlined-basic"
              label="New task"
              variant="outlined"
              onChange={(event) => setInput(event.target.value)}
              value={input}
              fullWidth
            />
          </Grid>
          <Grid item md={1}>
            <Button
              variant="contained"
              onClick={addTask}
              disabled={disable}
              title="Add new task"
            >
              ADD
            </Button>
          </Grid>
        </Grid>
      )}
      <>
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
              setDisableUpdate={setDisableUpdate}
              disableUpdate={disableUpdate}
            />
          ))}
        {tasks && tasks.length ? "" : "No Tasks...."}
      </>
    </Container>
  );
};

export default Todos;
