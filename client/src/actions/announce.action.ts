import axios from "axios";

export const GET_ANNOUNCE = "GET_ANNOUNCE";

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
