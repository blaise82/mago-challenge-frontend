import {
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_REQUEST,
  CLOSE_MESSAGE,
} from "../types/sendTypes";

const initialState = {
  loading: "none",
  data: [],
  error: "",
  open: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_MESSAGE_REQUEST:
      return {
        ...state,
        loading: "block",
        open: false,
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        loading: "none",
        data: payload,
        error: "",
        open: false,
      };
    case SEND_MESSAGE_FAILURE:
      return {
        loading: "none",
        data: [],
        error: payload,
        open: true,
      };
    case CLOSE_MESSAGE:
      return {
        loading: "none",
        user: [],
        error: "",
        open: false,
      };
    default:
      return state;
  }
};

export default reducer;
