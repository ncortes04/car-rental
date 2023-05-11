import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCarData } from '../utils/apiRoutes';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
    try {
        const response = await getCarData();
        const data = await response.json()
        return data.allCars;
    } catch (e) {
        console.log(e)
    }
});
const initialStateValue = { value: [] };

export const carSlice = createSlice({
  name: 'cars',
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default carSlice.reducer;
