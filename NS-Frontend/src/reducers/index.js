import { combineReducers } from "redux";
import { CountsReducer } from "./CountsReducer";
import { BlogsReducer } from "./blog";
export default combineReducers({ counts: CountsReducer, blogs: BlogsReducer });
