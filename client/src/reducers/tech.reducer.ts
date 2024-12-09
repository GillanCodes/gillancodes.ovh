import { DELETE_TECH, GET_TECHS, POST_TECH } from "../actions/tech.action";

const initialState:object = {};

export default function techsReducer(state:any = initialState, action:any)
{
    switch(action.type)
    {
        case GET_TECHS:
            return action.payload;
        case POST_TECH:
            return [...state, action.payload]
        case DELETE_TECH:
            return state.filter((tech:any) => tech._id !== action.payload._id); 
        default:
            return state;
    }
}