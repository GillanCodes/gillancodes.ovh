import axios from "axios";

export const GET_STUDY = "GET_STUDY";

export const getStudies = () => {
    return (dispatch:any) => {
        return axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/study`,
            withCredentials:true
        }).then((res) => {
            dispatch({type: GET_STUDY, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}