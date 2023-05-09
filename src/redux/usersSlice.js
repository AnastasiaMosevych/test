import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import * as usersAPI from '../api/usersAPI';
// import { toast } from "react-toastify";
import { getUsersThunk } from './operations';

const initialState = {
    users: [],
    loadMore: true,
    isLoading: false,
    isUpdating: false,
    page: 1
}

const handlePending = (state, { payload }) => {
    state.isLoading = true
}

const handleFulfilled = (state, { payload }) => {
    state.users = payload
    state.isLoading = false
    state.isUpdating = false

    if (payload.length === 3) {
        state.isLoading = true
    } else {
        state.isLoading = false
    }
    state.isLoading = false
}

const handleRejected = (state, action) => {
    state.isLoading = false
    state.isUpdating = true
    state.loadMore = false
}

const UsersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setLoadMore: (state, action) => {
            state.loadMore = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersThunk.fulfilled, handleFulfilled)
            .addMatcher(isAnyOf(getUsersThunk.pending), handlePending)
            .addMatcher(isAnyOf(getUsersThunk.rejected, handleRejected))
        
    }
})

export const usersReducer = UsersSlice.reducer;
export const { setPage, setLoadMore } = UsersSlice.actions;
 