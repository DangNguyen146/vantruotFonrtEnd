import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from "./constant";
import Axios from "axios";
import { urlweb } from "../../../../../components/URL/url";

export const fetchLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    Axios({
      url: urlweb + "/users/login",
      method: "POST",
      data: user,
    })
      .then((result) => {
        if (result.data) {
          dispatch(actLoginSuccess(result.data));
          localStorage.setItem("userKH", JSON.stringify(result.data));
          history.push("/");
        } else {
          return Promise.reject({
            response: result.err,
          });
        }
      })
      .catch((err) => {
        dispatch(actLoginFailed(err));
      });
  };
};

const actLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (err) => {
  return {
    type: USER_LOGIN_FAILED,
    payload: err,
  };
};
