import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../utils/auth';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await authService.getMe();
  return response.foundUser;
});

const initialStateValue = { value: { name: '', id: null } };

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateValue,
  reducers: {
    setLogin: (state, action) => {
      state.value = action.payload;
    },
    setLogout: (state) => {
      state.value = initialStateValue;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.value = initialStateValue;
      });
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
