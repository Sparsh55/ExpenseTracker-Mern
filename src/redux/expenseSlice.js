// src/redux/expenseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  expenses: [],
};

export const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async (userId) => {
  const response = await axios.get(`http://localhost:5200/api/expense/${userId}`);
  console.log("get", response.data);
  return response.data;
});

export const addExpense = createAsyncThunk('expenses/addExpense', async (expense) => {
  const token = localStorage.getItem('token'); // Assuming the token is saved in localStorage
  if (!token) {
    throw new Error('No token found'); // Handle error if token is missing
  }


  const response = await axios.post('http://localhost:5200/api/expenses/', expense,{
    headers: {
      Authorization: `Bearer ${token}`, // Send token in Authorization header
    }
  });
  console.log("post", response.data);
  return response.data;
});

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.expenses = action.payload;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
      });
  },
});

export default expenseSlice.reducer;
