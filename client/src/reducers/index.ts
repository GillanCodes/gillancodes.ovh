import { combineReducers } from "redux";
import worksReducer from "./work.reducer";
import techsReducer from "./tech.reducer";
import studyReducer from "./study.reducer";

export default combineReducers({
    worksReducer,
    techsReducer,
    studyReducer
});