import {
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
} from "../types/usersTypes";

const initialState = {
  loading: "block",
  data: [],
  error: "",
  open: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: "block",
        open: false,
      };
    case GET_USERS_SUCCESS:
      return {
        loading: "none",
        data: payload,
        error: "",
        open: false,
      };
    case GET_USERS_FAILURE:
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
