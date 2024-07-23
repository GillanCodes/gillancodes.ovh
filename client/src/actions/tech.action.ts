import axios from "axios";

export const GET_TECHS = "GET_TECHS";

export const getTechs = () => {
    return (dispatch:any) => {
        return axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/tech`,
            withCredentials:true
        }).then((res) => {
            console.log(res)
            dispatch({type: GET_TECHS, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}