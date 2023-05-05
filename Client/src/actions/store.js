import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { getCarData } from '../utils/apiRoutes';
// Define initial state
const initialState = {
  cars: [],
  loading: false,
  error: null,
};

// Define actions
const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
const FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE';

// Define action creators
const fetchCarsRequest = () => ({ type: FETCH_CARS_REQUEST });
const fetchCarsSuccess = (cars) => ({ type: FETCH_CARS_SUCCESS, payload: cars });
const fetchCarsFailure = (error) => ({ type: FETCH_CARS_FAILURE, payload: error });

// Define async action creator
export const fetchCars = () => async (dispatch) => {
  dispatch(fetchCarsRequest());

  try {
    const response = await getCarData();
    const cars = await response.json();
    dispatch(fetchCarsSuccess(cars));
  } catch (error) {
    dispatch(fetchCarsFailure(error));
  }
};

// Define reducer
const carRentalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CARS_SUCCESS:
      return { ...state, cars: action.payload, loading: false, error: null };
    case FETCH_CARS_FAILURE:
      return { ...state, cars: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

// Create the store
const store = createStore(carRentalReducer, applyMiddleware(thunkMiddleware));

// Export the store
export default store;
