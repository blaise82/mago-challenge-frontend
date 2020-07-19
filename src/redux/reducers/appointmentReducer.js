import {
  GET_APPOINTMENTS_FAILURE,
  GET_APPOINTMENTS_SUCCESS,
  GET_APPOINTMENTS_REQUEST,
} from "../types/appointmentTypes";

const initialState = {
  loading: "block",
  data: [],
  error: "",
  open: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_APPOINTMENTS_REQUEST:
      return {
        ...state,
        loading: "block",
        open: false,
      };
    case GET_APPOINTMENTS_SUCCESS:
      return {
        loading: "none",
        data: payload,
        error: "",
        open: false,
      };
    case GET_APPOINTMENTS_FAILURE:
      return {
        loading: "none",
        data: [],
        error: payload,
        open: true,
      };
    default:
      return state;
  }
};

export default reducer;
