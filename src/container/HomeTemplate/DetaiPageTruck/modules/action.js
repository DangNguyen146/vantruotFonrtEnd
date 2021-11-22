import {
  LIST_TRUCKS_REQUEST,
  LIST_TRUCKS_SUCCESS,
  LIST_TRUCKS_FAILED,
} from "./constant";
import Axios from "axios";
import { urlweb } from "../../../../components/URL/url";

export const fetchListTrucksApi = () => {
  return (dispatch) => {
    dispatch(actListTrucksRequest());
    Axios({
      url: urlweb + "/trucks",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListTrucksSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListTrucksFailed(err));
      });
  };
};

const actListTrucksRequest = () => {
  return {
    type: LIST_TRUCKS_REQUEST,
  };
};

const actListTrucksSuccess = (data) => {
  return {
    type: LIST_TRUCKS_SUCCESS,
    payload: data,
  };
};

const actListTrucksFailed = (err) => {
  return {
    type: LIST_TRUCKS_FAILED,
    payload: err,
  };
};
