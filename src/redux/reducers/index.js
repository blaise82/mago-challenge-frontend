import { combineReducers } from "redux";
import usersReducer from "./usersReducers";
import sendReducer from "./sendReducer";

const allReducers = combineReducers({
  users: usersReducer,
  sendSingle: sendReducer,
});
export default allReducers;
