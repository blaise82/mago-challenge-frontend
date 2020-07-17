import axios from "axios";
import {
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
} from "../types/usersTypes";

export const getUsersAction = (data, history) => async (dispatch) => {
  try {
    dispatch(getUsers());
    const res = await axios.get(
      `https://mago-challenge-backend.herokuapp.com/api/subscribed/get`
    );
    dispatch(getUsersSuccess(res.data.data));
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.error;
      dispatch(getUsersFailure(errorMessage));
    } else {
      dispatch(getUsersFailure("Network Error"));
    }
  }
};

export const getUsers = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};

export const getUsersSuccess = (user) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: user,
  };
};
export const getUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error,
  };
};
