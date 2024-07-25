import axios from "axios";

export const GET_WORKS = "GET_WORKS";
export const POST_WORK = "POST_WORK";

export const getWorks = () => {
    return (dispatch:any) => {
        return axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/work`,
            withCredentials:true
        }).then((res) => {
            dispatch({type: GET_WORKS, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}

export const postWork = (data:any) => {
    console.log(data)
    return (dispatch:any) => {
        return axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/work`,
            withCredentials:true,
            data
        }).then((res) => {
            dispatch({type: POST_WORK, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}