import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import backLogReducer from "./backLogReducer";

export default combineReducers({
  errors: errorReducer,
  project: projectReducer,
  backlog: backLogReducer,
});
