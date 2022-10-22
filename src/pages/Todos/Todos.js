import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskAction,
  deleteTaskAction,
  doneTaskAction,
  changeTaskAction,
} from "../../components/store/todoSlice";
import Task from "../../components/Task/Task";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid } from "@mui/material";

const Todos = () => {
  const [input, setInput] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [status, setStatus] = useState(true);
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [disableButtonAdd, setDisableButtonAdd] = useState(true);
  const [disableIconTrash, setDisableIconTrash] = useState(false);
  const [disableButtonUpdate, setDisableButtonUpdate] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.tasks);
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
    setInput("");
  };
  const deleteTaskId = (id) => {
    dispatch(deleteTaskAction({ id }));
  };
  const markDone = (id) => {
    dispatch(doneTaskAction({ id }));
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
                  disabled={disableButtonUpdate}
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
              disabled={disableButtonAdd}
              title="Add new task"
            >
              ADD
            </Button>
          </Grid>
        </Grid>
      )}
      <>
        {tasks.map((taskText) => (
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
        {tasks && tasks.length ? "" : "No Tasks...."}
      </>
    </Container>
  );
};

export default Todos;
