import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const SubscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    addSubscription: (state, { payload }) => {
      state.users = [...state.users, payload];
    },
    deleteSubscription: (state, { payload }) => {
      const users = [...state.users];
      users.splice(payload, 1);
      state.users = [...users];
    },
  },
});

export const { addSubscription, deleteSubscription } = SubscriptionSlice.actions;

export const subscriptionReducer = SubscriptionSlice.reducer;