import { combineReducers } from "redux";
import usersReducer from "./usersReducers";
import sendReducer from "./sendReducer";
import bulkReducer from "./bulkReducer";
import appointmentReducer from "./appointmentReducer";

const allReducers = combineReducers({
  users: usersReducer,
  sendSingle: sendReducer,
  sendBulk: bulkReducer,
  appointment: appointmentReducer,
});
export default allReducers;
