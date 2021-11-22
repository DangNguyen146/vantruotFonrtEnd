import {
  LIST_ITEMS_REQUEST,
  LIST_ITEMS_SUCCESS,
  LIST_ITEMS_FAILED,
} from "./constant";
import Axios from "axios";
import { urlweb } from "../../../../components/URL/url";

export const fetchItemsApi = (_id) => {
  return (dispatch) => {
    dispatch(actListItemsRequest());
    Axios({
      url: urlweb + "/details/" + _id,
      method: "GET",
    })
      .then((result) => {
        dispatch(actListItemsSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListItemsFailed(err));
      });
  };
};

const actListItemsRequest = () => {
  return {
    type: LIST_ITEMS_REQUEST,
  };
};

const actListItemsSuccess = (data) => {
  return {
    type: LIST_ITEMS_SUCCESS,
    payload: data,
  };
};

const actListItemsFailed = (err) => {
  return {
    type: LIST_ITEMS_FAILED,
    payload: err,
  };
};
