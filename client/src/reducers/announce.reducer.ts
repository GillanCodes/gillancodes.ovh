import { GET_ANNOUNCE, GET_ANNOUNCES } from "../actions/announce.action";

const initialState:object = {};

export default function announceReducer(state:any = initialState, action:any)
{
    switch(action.type)
    {
      case GET_ANNOUNCE:
        return action.payload[0];
      case GET_ANNOUNCES:
        return action.payload;
      default:
        return state;
    }
}
