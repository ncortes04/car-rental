import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { 
  car: [],
  bookedDays: []
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: initialStateValue,
  reducers: {
    setCar: (state, action) => {
      state.car = action.payload;
    },
    setCheckoutBookedDays: (state, action) => {
      state.bookedDays = action.payload;
    },
  },
});

export const { setCar, setCheckoutBookedDays } = checkoutSlice.actions;

export default checkoutSlice.reducer;
