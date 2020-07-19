import axios from "axios";
import {
  GET_APPOINTMENTS_FAILURE,
  GET_APPOINTMENTS_SUCCESS,
  GET_APPOINTMENTS_REQUEST,
} from "../types/appointmentTypes";

export const getAppointmentsAction = (data, history) => async (dispatch) => {
  try {
    dispatch(getAppointments());
    const res = await axios.get(
      `https://mago-challenge-backend.herokuapp.com/api/sms/appointments/get`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(getAppointmentsSuccess(res.data.data));
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.error;
      dispatch(getAppointmentsFailure(errorMessage));
    } else {
      dispatch(getAppointmentsFailure("Network Error"));
    }
  }
};

export const getAppointments = () => {
  return {
    type: GET_APPOINTMENTS_REQUEST,
  };
};

export const getAppointmentsSuccess = (user) => {
  return {
    type: GET_APPOINTMENTS_SUCCESS,
    payload: user,
  };
};
export const getAppointmentsFailure = (error) => {
  return {
    type: GET_APPOINTMENTS_FAILURE,
    payload: error,
  };
};
