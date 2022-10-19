import { legacy_createStore as createStore } from "redux";
import { cashReducer } from "./reducers/addTask";

export const store = createStore(cashReducer);
