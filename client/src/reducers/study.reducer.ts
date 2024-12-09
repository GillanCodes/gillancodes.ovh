import { DELETE_STUDY, GET_STUDY, POST_STUDY } from "../actions/study.action";

const initialState:object = {};

export default function studyReducer(state:any = initialState, action:any)
{
    switch(action.type)
    {
        case GET_STUDY:
            return action.payload;
        case POST_STUDY:
            return [...state, action.payload];
        case DELETE_STUDY:
            return state.filter((study:any) => study._id !== action.payload._id);
        default:
            return state;
    }
}