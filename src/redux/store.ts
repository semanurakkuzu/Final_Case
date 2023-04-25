import { configureStore } from '@reduxjs/toolkit'
import  starShipsReducer from './starShipsSlice'


export const store = configureStore({
  reducer: {
    starships: starShipsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch