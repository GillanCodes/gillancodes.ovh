import { DELETE_WORK, GET_WORKS, POST_WORK } from "../actions/works.action";

const initialState:object = {};

export default function worksReducer(state:any = initialState, action:any)
{
    switch(action.type)
    {
        case GET_WORKS:
            return action.payload;
        case POST_WORK: 
            return [...state, action.payload]
        case DELETE_WORK:
            return state.filter((work:any) => work._id !== action.payload._id);
        default:
            return state;
    }
}