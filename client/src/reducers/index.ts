import { combineReducers } from "redux";
import worksReducer from "./work.reducer";
import techsReducer from "./tech.reducer";
import studyReducer from "./study.reducer";
import announceReducer from "./announce.reducer"

export default combineReducers({
    worksReducer,
    techsReducer,
    studyReducer,
    announceReducer
});
