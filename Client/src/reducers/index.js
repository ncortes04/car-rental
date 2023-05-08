import { combineReducers } from 'redux';
import carsReducer from './carReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  cars: carsReducer,
  user: userReducer,
});

export default rootReducer;