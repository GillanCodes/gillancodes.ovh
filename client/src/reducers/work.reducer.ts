import { GET_WORKS } from "../actions/works.action";

const initialState:object = {};

export default function worksReducer(state:any = initialState, action:any)
{
    switch(action.type)
    {
        case GET_WORKS:
            return action.payload;
        default:
            return state;
    }
}