import axios from "axios";

export const GET_TECHS = "GET_TECHS";
export const POST_TECH = "POST_TECH";
export const DELETE_TECH = "DELETE_TECH";

export const getTechs = () => {
    return (dispatch:any) => {
        return axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}/tech`,
            withCredentials:true
        }).then((res) => {
            dispatch({type: GET_TECHS, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}

export const postTech = (data:any) => {
    return (dispatch:any) => {
        return axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/tech`,
            withCredentials:true,
            data
        }).then((res) => {
            dispatch({type: POST_TECH, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}

export const deleteTech = (id:string) => {
    return (dispatch:any) => {
        return axios({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}/tech/${id}`,
            withCredentials:true
        }).then((res) => {
            dispatch({type: DELETE_TECH, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}