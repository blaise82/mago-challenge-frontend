import axios from "axios";
import {
  SEND_BULK_MESSAGE_FAILURE,
  SEND_BULK_MESSAGE_SUCCESS,
  SEND_BULK_MESSAGE_REQUEST,
  CLOSE_MESSAGE,
} from "../types/bulkTypes";

export const sendBulkMessageAction = (data, history) => async (dispatch) => {
  try {
    dispatch(sendBulkMessage());
    const res = await axios.post(
      `https://mago-challenge-backend.herokuapp.com/api/sms/send/bulk`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(sendBulkMessageSuccess(res));
    history.push("/");
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.error;
      dispatch(sendBulkMessageFailure(errorMessage));
    } else {
      dispatch(sendBulkMessageFailure("Network Error"));
    }
  }
};

export const sendBulkMessage = () => {
  return {
    type: SEND_BULK_MESSAGE_REQUEST,
  };
};

export const sendBulkMessageSuccess = (user) => {
  return {
    type: SEND_BULK_MESSAGE_SUCCESS,
    payload: user,
  };
};
export const sendBulkMessageFailure = (error) => {
  return {
    type: SEND_BULK_MESSAGE_FAILURE,
    payload: error,
  };
};

export const closeMessage = () => {
  return {
    type: CLOSE_MESSAGE,
  };
};
