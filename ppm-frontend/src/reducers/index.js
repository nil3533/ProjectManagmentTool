import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import backLogReducer from "./backLogReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  project: projectReducer,
  backlog: backLogReducer,
  security: securityReducer,
});
