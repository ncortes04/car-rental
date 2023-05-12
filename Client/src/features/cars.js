import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCarData } from '../utils/apiRoutes';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  try {
    const response = await getCarData();
    const data = await response.json();
    return data.allCars;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const initialState = {
  unfilteredData: [],
  filteredData: [],
};

export const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    resetFilteredData: (state) => {
      state.filteredData = state.unfilteredData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.unfilteredData = action.payload;
      state.filteredData = action.payload;
    });
  },
});

export const { setFilteredData, resetFilteredData } = carSlice.actions;

export default carSlice.reducer;
