import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersSlice";
import { subscriptionReducer } from "./subscriptionSlice";
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const subPersistConfig = {
//   key: 'subscription',
//   storage,

// }


export const store = configureStore({
  reducer: {
    users: usersReducer,
    subscription:
      // TODO: complete persist persistReducer(subPersistConfig,)
     subscriptionReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
