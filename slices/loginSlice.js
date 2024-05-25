// loginSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  user: null,
};


export const login = createAsyncThunk('login/fetch', async (data) => {
  console.log("createAsyncThunk eksekusi");
  const response = await axios.post('http://103.171.84.215:9090/webhook/login', data)
  console.log(response);
  return response.data;
})

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(login.pending, (state, action) => {
        console.log("pending")
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action)
        state.user = action.payload.name;
        console.log("Sukses");
      })
      .addCase(login.rejected, (state, action) => {
        console.log("Gagal");
      })
  }

});

export const { loginSuccess, logout } = loginSlice.actions;

export default loginSlice.reducer;
