import axios from "axios";

export const GET_STUDY = "GET_STUDY";
export const POST_STUDY = "POST_STUDY";
export const DELETE_STUDY = "DELETE_STUDY";

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

export const postStudy = (data:any) => {
    return (dispatch:any) => {
        return axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/study`,
            withCredentials:true,
            data
        }).then((res) => {
            dispatch({type: POST_STUDY, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}

export const deleteStudy = (id:string) => {
    return (dispatch:any) => {
        return axios({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}/study/${id}`,
            withCredentials:true,
        }).then((res) => {
            dispatch({type: DELETE_STUDY, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}