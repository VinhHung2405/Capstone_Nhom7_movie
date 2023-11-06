import { combineReducers } from "redux";
import { userReducer } from "./user";
import { spinReducer } from "./spinner";

export let rootReducer = combineReducers({
    userReducer,
    spinReducer
})