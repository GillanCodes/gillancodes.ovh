import { CREATE_ANNOUNCE, DELETE_ANNOUNCE, EDIT_ANNOUNCE, GET_ANNOUNCE, GET_ANNOUNCES } from "../actions/announce.action";

const initialState:object = {};

export default function announceReducer(state:any = initialState, action:any)
{
    switch(action.type)
    {
      case GET_ANNOUNCE:
        return action.payload[0];
      case GET_ANNOUNCES:
        return action.payload;
      case CREATE_ANNOUNCE:
        return [action.payload, ...state]
      case EDIT_ANNOUNCE:
        return state.map((announce:any) => {
          if (announce._id === action.payload._id) return action.payload;
          else return announce
        })
      case DELETE_ANNOUNCE:
        return state.filter((v:any) => v._id !== action.payload._id)
      default:
        return state;
    }
}
