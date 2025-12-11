import { GET_USER, GET_USER_PENDING, GET_USER_ERROR, UPDATE_USER, UPDATE_USER_PENDING, UPDATE_USER_ERROR } from "../actions/user.action";
import { UserState } from "../types/state.type";

const initialState: object = {
  data: null,
  loading: false,
  error: null
};

export default function userReducer(state = initialState, action: any): UserState {
  switch (action.type) {
    case GET_USER_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_USER:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      }
    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      } 
    case UPDATE_USER_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case UPDATE_USER:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      }
      case UPDATE_USER_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
    default:
      return {
        ...state,
        loading: false,
        error: null
      }
  }
}
