import { combineReducers } from "redux";
import userReducer from "./userReducers";
import checkoutReducer from "./checkoutReducers";
import carReducer from './carReducers'
const rootReducer = combineReducers({
  car: carReducer,
  checkout: checkoutReducer,
  user: userReducer,
});

export default rootReducer;
