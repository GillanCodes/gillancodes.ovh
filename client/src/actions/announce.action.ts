import axios from "axios";

export const GET_ANNOUNCE = "GET_ANNOUNCE";
export const GET_ANNOUNCES = "GET_ANNOUNCES";

export const getAnnounce = () => {
    return (dispatch:any) => {
        return axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/announce`,
            withCredentials:true
        }).then((res) => {
            dispatch({type: GET_ANNOUNCE, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}

export const getAnnounces = () => {
    return (dispatch:any) => {
        return axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/announce/all`,
            withCredentials:true
        }).then((res) => {
            dispatch({type: GET_ANNOUNCES, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}
