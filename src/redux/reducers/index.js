import { combineReducers } from "redux";
import usersReducer from "./usersReducers";
import sendReducer from "./sendReducer";
import bulkReducer from "./bulkReducer";

const allReducers = combineReducers({
  users: usersReducer,
  sendSingle: sendReducer,
  sendBulk: bulkReducer,
});
export default allReducers;
