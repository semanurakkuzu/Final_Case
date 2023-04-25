import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { StarShip } from '../types/Starship'

interface StarShipState {
  starShipData: Array<StarShip> | null
}

const initialState: StarShipState = {
  starShipData: null
}

export const StarShipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setStarShip: (state, action) => {
      state.starShipData = action.payload
    }, 
  },
})

export const { setStarShip } = StarShipsSlice.actions
export const selectStarShip = (state: RootState) => state.starships.starShipData

export default StarShipsSlice.reducer