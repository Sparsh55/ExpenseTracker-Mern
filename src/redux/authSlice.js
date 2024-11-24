// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  const response = await axios.post('http://localhost:5200/api/auth/login', { email, password });
  localStorage.setItem('token', response.data.token);
  axios.defaults.headers.common['Authorization'] = response.data.token;
  console.log(response.data);
  return response.data;
});

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
  dispatch(authSlice.actions.logout());
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
