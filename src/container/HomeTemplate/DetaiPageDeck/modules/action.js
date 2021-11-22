import {
  LIST_DECKS_REQUEST,
  LIST_DECKS_SUCCESS,
  LIST_DECKS_FAILED,
} from "./constant";
import Axios from "axios";
import { urlweb } from "../../../../components/URL/url";

export const fetchListDecksApi = () => {
  return (dispatch) => {
    dispatch(actListDecksRequest());
    Axios({
      url: urlweb + "/decks",
      method: "GET",
    })
      .then((result) => {
        dispatch(actListDecksSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListDecksFailed(err));
      });
  };
};

const actListDecksRequest = () => {
  return {
    type: LIST_DECKS_REQUEST,
  };
};

const actListDecksSuccess = (data) => {
  return {
    type: LIST_DECKS_SUCCESS,
    payload: data,
  };
};

const actListDecksFailed = (err) => {
  return {
    type: LIST_DECKS_FAILED,
    payload: err,
  };
};
