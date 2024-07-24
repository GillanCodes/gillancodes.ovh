import { GET_STUDY } from "../actions/study.action";

const initialState:object = {};

export default function studyReducer(state:any = initialState, action:any)
{
    switch(action.type)
    {
        case GET_STUDY:
            return action.payload;
        default:
            return state;
    }
}