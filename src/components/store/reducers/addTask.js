import {
  ADD_TASK,
  DELETE_TASK,
  CHANGE_TASK,
  DONE_TASK,
} from "../actions/tasks/types";
const defaultState = {
  tasks: [],
};

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case CHANGE_TASK:
      let filterRecords = [...state.tasks].filter(
        (task) => task.id !== action.payload.id
      );
      let updatedObject = [
        ...filterRecords,
        JSON.parse(JSON.stringify(action.payload)),
      ];

      return { ...state, tasks: updatedObject };
    case DONE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, status: !task.status };
          }
          return task;
        }),
      };
    default:
      return state;
  }
};
