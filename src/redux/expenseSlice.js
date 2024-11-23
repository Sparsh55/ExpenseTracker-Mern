// src/redux/expenseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  expenses: [],
};

export const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async (userId) => {
  const response = await axios.get(`/api/expenses/${userId}`);
  return response.data;
});

export const addExpense = createAsyncThunk('expenses/addExpense', async (expense) => {
  const response = await axios.post('/api/expenses', expense);
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
