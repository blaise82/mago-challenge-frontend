import axios from "axios";
import {
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_REQUEST,
  CLOSE_MESSAGE,
} from "../types/sendTypes";

export const sendMessageAction = (data, history) => async (dispatch) => {
  try {
    dispatch(sendMessage());
    const res = await axios.post(
      `https://mago-challenge-backend.herokuapp.com/api/sms/send`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(sendMessageSuccess(res));
    history.push("/");
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.error;
      dispatch(sendMessageFailure(errorMessage));
    } else {
      dispatch(sendMessageFailure("Network Error"));
    }
  }
};

export const sendMessage = () => {
  return {
    type: SEND_MESSAGE_REQUEST,
  };
};

export const sendMessageSuccess = (user) => {
  return {
    type: SEND_MESSAGE_SUCCESS,
    payload: user,
  };
};
export const sendMessageFailure = (error) => {
  return {
    type: SEND_MESSAGE_FAILURE,
    payload: error,
  };
};

export const closeMessage = () => {
  return {
    type: CLOSE_MESSAGE,
  };
};
