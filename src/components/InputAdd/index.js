import React from "react";
import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

const InputAdd = ({ setInput, input, addTask, disableButtonAdd }) => {
  const onChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "15px", marginBottom: "15px" }}
    >
      <Grid item={true} xs={12} md={11}>
        <TextField
          id="outlined-basic"
          label="New task"
          variant="outlined"
          onChange={onChange}
          value={input}
          fullWidth
        />
      </Grid>
      <Grid item={true} md={1}>
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
  );
};

export default InputAdd;
