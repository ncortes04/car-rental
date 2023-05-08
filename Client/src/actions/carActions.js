import { getCarData } from "../utils/apiRoutes";

export const setAllCars = (cars) => {
  return {
    type: 'SET_ALL_CARS',
    payload: cars,
  };
};

export const getAllCars = () => {
  return async (dispatch) => {
    try {
      const response = await getCarData();
      const cars = await response.json();
      console.log(cars.allCars)
      dispatch(setAllCars(cars.allCars));
    } catch (error) {
      console.error(error);
    }
  };
};