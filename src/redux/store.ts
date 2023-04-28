import { configureStore } from '@reduxjs/toolkit';
import starShipsReducer from './starShipsSlice';
import starShipDetailReducer from './starShipDetailSlice';

export const store = configureStore({
  reducer: {
    starships: starShipsReducer,
    starshipDetail: starShipDetailReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
