import axios from "axios";

export const GET_ANNOUNCE = "GET_ANNOUNCE";
export const GET_ANNOUNCES = "GET_ANNOUNCES";
export const CREATE_ANNOUNCE = "CREATE_ANNOUNCE";
export const EDIT_ANNOUNCE = "EDIT_ANNOUNCE";
export const SWITCH_ANNOUNCE = "SWITCH_ANNOUNCE";
export const DELETE_ANNOUNCE = "DELETE_ANNOUNCE";

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

export const createAnnounce = (data:any) => {
    return (dispatch:any) => {
        return axios({
            method: "POST",
            url: `${process.env.REACT_APP_API_URL}/announce/`,
            withCredentials:true,
            data : {
                title: data.title,
                content: JSON.stringify(data.content),
                active: data.active
            }
        }).then((res) => {
            dispatch({type: CREATE_ANNOUNCE, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}

export const switchAnnounce = (id:string) => {
    return (dispatch:any) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}/announce/${id}/switch`,
            withCredentials:true
        }).then((res) => {
            dispatch({type: EDIT_ANNOUNCE, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}

export const deleteAnnounce = (id:string) => {
    return (dispatch:any) => {
        return axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_API_URL}/announce/${id}`,
            withCredentials:true
        }).then((res) => {
            dispatch({type: DELETE_ANNOUNCE, payload: res.data});
        }).catch((err) => {
            return console.log(err);
        })
    }
}
