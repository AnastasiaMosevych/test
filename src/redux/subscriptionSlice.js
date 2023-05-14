import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subscribedUsers: [],
};

const SubscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    addSubscription: (state, { payload }) => {
      state.subscribedUsers.push(payload);
    },
    deleteSubscription: (state, { payload }) => {
      const idToDelete = (element) => element === payload;
      const index = state.subscribedUsers.findIndex(
        idToDelete
      );
      state.subscribedUsers.splice(index, 1);
    },
  },
});

export const { addSubscription, deleteSubscription } = SubscriptionSlice.actions;

export const subscriptionReducer = SubscriptionSlice.reducer;