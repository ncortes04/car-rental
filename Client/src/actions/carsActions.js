import { getCarData } from "../utils/apiRoutes";
import { FETCH_CARS_REQUEST, FETCH_CARS_SUCCESS, FETCH_CARS_FAILURE } from "../constants/actionsTypes";

export const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST
});

export const fetchCarsSuccess = (cars) => ({
  type: FETCH_CARS_SUCCESS,
  payload: cars
});

export const fetchCarsFailure = (error) => ({
  type: FETCH_CARS_FAILURE,
  payload: error
});

export const getAllCars = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCarsRequest());
      const response = await getCarData();
      const data = await response.json();
      dispatch(fetchCarsSuccess(data.allCars));
    } catch (error) {
      dispatch(fetchCarsFailure(error.message));
    }
  };
};
