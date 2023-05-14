import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { toast } from "react-toastify";
import { getUsersThunk, updateFollowersThunk } from './operations';

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

const handleFulfilledFollowers = (state, { payload }) => {
    const index = state.users.findIndex(
        user => user.id === payload.id
    )
    state.users[index].followers = payload.followers

}

const handleFulfilled = (state, { payload }) => {
    if (!(JSON.stringify(state.users) === JSON.stringify(payload))) {
        // add users to state only if they are not in state already
        state.users = state.users.concat(payload)
        state.page += 1
        state.isLoading = false
    }
    state.isUpdating = false
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
            .addCase(updateFollowersThunk.fulfilled, handleFulfilledFollowers)
            .addMatcher(isAnyOf(getUsersThunk.pending, updateFollowersThunk.pending), handlePending)
            .addMatcher(isAnyOf(getUsersThunk.rejected, updateFollowersThunk.rejected), handleRejected)
    }
})

export const usersReducer = UsersSlice.reducer;
export const { setPage, setLoadMore } = UsersSlice.actions;
 