import { FETCH_CARS_SUCCESS, FETCH_CARS_FAILURE } from "../constants/actionsTypes";

const initialState = {
  allCars: [],
  error: null,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_SUCCESS:
      return { ...state, allCars: action.payload };
    case FETCH_CARS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default carReducer;