import axios from "axios";
import { apiURLs } from "../config/config";
import { toast } from "react-toastify";

export const GET_EVENT_REQUEST = "GET_EVENT_REQUEST";
export const GET_EVENT_SUCCESS = "GET_EVENT_SUCCESS";
export const GET_EVENT_FAILURE = "GET_EVENT_FAILURE";

export const getEvents = (payload) => {
  return (dispatch) => {
    dispatch(getEventRequest());

    axios
      .post(apiURLs.ueventser, payload)
      .then((res) => res.data)
      .then((res) => {
        dispatch(getEventSuccess(res.data));
      })
      .catch((err) => {
        let msg = "";
        err.response.data.errors.forEach((e) => {
          msg = msg.concat(e.param, ": ", e.msg, ";");
        });
        dispatch(getEventFailure(msg));
        toast(msg);
      });
  };
};

export const getEventRequest = () => ({
  type: GET_EVENT_REQUEST,
});

export const getEventSuccess = (message) => ({
  type: GET_EVENT_SUCCESS,
  payload: message,
});

export const getEventFailure = (error) => ({
  type: GET_EVENT_FAILURE,
  payload: error,
});
