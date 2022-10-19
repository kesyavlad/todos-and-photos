import { ADD_TASK, DELETE_TASK, CHANGE_TASK, DONE_TASK } from "./types";

export function addTaskAction(task) {
  return { type: ADD_TASK, payload: task };
}
export function deleteTaskAction(task) {
  return { type: DELETE_TASK, payload: task };
}
export function changeTaskAction(task) {
  return { type: CHANGE_TASK, payload: task };
}
export function doneTaskAction(task) {
  return { type: DONE_TASK, payload: task };
}
