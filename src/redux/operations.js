import * as mockapi from '../api/usersAPI';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersThunk = createAsyncThunk('users/fetchAll', async (_, thunkAPI) => {
  try {
      const response = await mockapi.getUsersApi();
      return response;
  } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const updateFollowersThunk = createAsyncThunk('users/id', async (id, thunkAPI) => {
    try {
        const body = { followers: 33 }
        const response = await mockapi.updateFollowersApi(id, body);
        return response;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
 })