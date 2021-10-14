import { combineReducers } from "redux";
import guestUserReducer from "./guestUserReducer";
import adminReducer from "./adminReducer";
import regUserReducer from './regUserReducer'



const rootReducer = combineReducers({
    guestUserReducer,adminReducer,regUserReducer
});

export default rootReducer;