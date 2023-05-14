import * as mockapi from '../api/usersAPI';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersThunk = createAsyncThunk('users/getpaginated', async (page, thunkAPI) => {
    try {
        const response = await mockapi.getUsersAPI(page);
        return response;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const updateFollowersThunk = createAsyncThunk('users/id', async(userInfo, thunkAPI) => {
    try {
        const body = { followers: userInfo.followers};
        const response = await mockapi.updateFollowersApi(userInfo.id, body);
        return response;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
 })