import axios from 'axios';
import { AppDistach } from "../types/dispatch.type";

export const GET_USER = "GET_USER";
export const GET_USER_PENDING = "GET_USER_PENDING";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_PENDING = "UPDATE_USER_PENDING";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";


export const getUser = (UID: string) => {
  return async (dispatch: AppDistach) => {
    dispatch({ type: GET_USER_PENDING });
    return await axios({
      method: "get",
      url: `/api/user/${UID}`,
      withCredentials: true,
    }).then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
    }).catch((err) => {
      console.log(err);
      // dispatch({ type: GET_USER_ERROR, payload: err});
    });
  };
};

export const updateUser = (data: FormData) => {
  return async (dispatch: AppDistach) => {
    dispatch({ type: GET_USER_PENDING });
    return await axios({
      method: "patch",
      url: `/api/user/`,
      withCredentials: true,
      data
    }).then((res:any) => {
      if(res.data.errors) return dispatch({type: UPDATE_USER_ERROR, payload: res.data.errors})
      dispatch({ type: UPDATE_USER, payload: res.data});
    }).catch((err) => {
      console.log(err);
    });
  }
};
