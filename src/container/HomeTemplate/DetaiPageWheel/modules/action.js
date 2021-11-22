import {
  LIST_WHEELS_REQUEST,
  LIST_WHEELS_SUCCESS,
  LIST_WHEELS_FAILED,
} from "./constant";
import Axios from "axios";
import { urlweb } from "../../../../components/URL/url";

export const fetchListWheelsApi = () => {
  return (dispatch) => {
    dispatch(actListWheelsRequest());
    Axios({
      url: urlweb + "/wheels",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListWheelsSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListWheelsFailed(err));
      });
  };
};

const actListWheelsRequest = () => {
  return {
    type: LIST_WHEELS_REQUEST,
  };
};

const actListWheelsSuccess = (data) => {
  return {
    type: LIST_WHEELS_SUCCESS,
    payload: data,
  };
};

const actListWheelsFailed = (err) => {
  return {
    type: LIST_WHEELS_FAILED,
    payload: err,
  };
};
