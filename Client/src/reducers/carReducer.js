const initialState = {
  allCars: [],
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_CARS':
      return {
        ...state,
        allCars: action.payload,
      };
    default:
      return state;
  }
};

export default carsReducer;