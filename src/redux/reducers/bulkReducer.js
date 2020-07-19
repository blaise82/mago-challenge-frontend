import {
  SEND_BULK_MESSAGE_FAILURE,
  SEND_BULK_MESSAGE_SUCCESS,
  SEND_BULK_MESSAGE_REQUEST,
  CLOSE_MESSAGE,
} from "../types/bulkTypes";

const initialState = {
  loading: "none",
  data: [],
  error: "",
  open: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_BULK_MESSAGE_REQUEST:
      return {
        ...state,
        loading: "block",
        open: false,
      };
    case SEND_BULK_MESSAGE_SUCCESS:
      return {
        loading: "none",
        data: payload,
        error: "",
        open: false,
      };
    case SEND_BULK_MESSAGE_FAILURE:
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
