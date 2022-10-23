import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTaskAction(state, action) {
      state.tasks.push({
        id: Date.now().toString(),
        input: action.payload.input,
        status: action.payload.status,
      });
    },
    deleteTaskAction(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    changeTaskAction(state, action) {
      let filterRecords = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      state.tasks = [
        ...filterRecords,
        JSON.parse(JSON.stringify(action.payload)),
      ];
    },
    sortTaskAction(state, action) {
      state.tasks.sort((a, b) => (a.status > b.status ? -1 : 1));
    },
    doneTaskAction(state, action) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.status = !task.status;
        }
        return task;
      });
    },
    // filteredTaskAction(state, action) {
    //   if (action.payload === "All") {
    //     console.log(state.tasks);
    //     return state;
    //   } else if (action.payload === "Todo") {
    //     let result = state.tasks.filter((task) => task.status === true);
    //     console.log(result);
    //   } else if (action.payload === "") {
    //     let result = state.tasks.filter((task) => task.status === false);
    //     console.log(result);
    //   }
    // },
  },
});

export const {
  addTaskAction,
  deleteTaskAction,
  changeTaskAction,
  doneTaskAction,
  sortTaskAction,
  filteredTaskAction,
} = todoSlice.actions;
export default todoSlice.reducer;
