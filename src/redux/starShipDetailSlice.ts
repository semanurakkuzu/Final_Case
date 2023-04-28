import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { StarShip } from '../types/Starship';
interface StarShipState {
  starShip: StarShip | null;
}

const initialState: StarShipState = {
  starShip: null
};

export const starShipDetailSlice = createSlice({
  name: 'starshipDetail',
  initialState,
  reducers: {
    setStarShip: (state, action) => {
      state.starShip = action.payload;
    }
  }
});

export const { setStarShip } = starShipDetailSlice.actions;
export const selectStarShip = (state: RootState) => state.starshipDetail.starShip;

export default starShipDetailSlice.reducer;
