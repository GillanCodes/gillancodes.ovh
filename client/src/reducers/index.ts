import { combineReducers } from "redux";
import worksReducer from "./work.reducer";
import techsReducer from "./tech.reducer";

export default combineReducers({
    worksReducer,
    techsReducer
});