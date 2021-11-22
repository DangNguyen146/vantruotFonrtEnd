import {
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAILED,
} from "./constant";
import Axios from "axios";
import { urlweb } from "../../../../../components/URL/url";

export const fetchCreateApi = (user, history) => {
  return (dispatch) => {
    dispatch(actCreateRequest());
    Axios({
      url: urlweb + "/users/signup",
      method: "POST",
      data: user,
    })
      .then((result) => {
        if (result.data) {
          dispatch(actCreateSuccess(result.data));
          alert("Tạo tài khoản thành công, vui lòng đăng nhập");
          history.push("/");
        } else {
          return Promise.reject({
            response: { data: "Lỗi" },
          });
        }
      })
      .catch((err) => {
        dispatch(actCreateFailed(err));
      });
  };
};

const actCreateRequest = () => {
  return {
    type: USER_CREATE_REQUEST,
  };
};

const actCreateSuccess = (data) => {
  return {
    type: USER_CREATE_SUCCESS,
    payload: data,
  };
};

const actCreateFailed = (err) => {
  return {
    type: USER_CREATE_FAILED,
    payload: err,
  };
};
