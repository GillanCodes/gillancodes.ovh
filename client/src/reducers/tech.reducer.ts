import { GET_TECHS } from "../actions/tech.action";

const initialState:object = {};

export default function techsReducer(state:any = initialState, action:any)
{
    switch(action.type)
    {
        case GET_TECHS:
            return action.payload;
        default:
            return state;
    }
}