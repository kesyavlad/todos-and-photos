import React from "react";
import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

const InputUpdate = ({
  changeTask,
  updateData,
  updateTask,
  disableButtonUpdate,
  cancelUpdateData,
}) => {
  const onChange = (event) => {
    changeTask(event);
  };
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      alignItems="center"
      justifyContent="flex-end"
      style={{ marginTop: "15px", marginBottom: "15px" }}
    >
      <Grid item={true} xs={12} md={9}>
        <TextField
          id="outlined-basic"
          label="Update task"
          variant="outlined"
          fullWidth
          onChange={onChange}
          value={updateData && updateData.input}
        />
      </Grid>
      <Grid item={true} md={3}>
        <Grid container spacing={2} direction="row" justifyContent="flex-end">
          <Grid item={true} md={6}>
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
          <Grid item={true} md={6}>
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
  );
};

export default InputUpdate;
