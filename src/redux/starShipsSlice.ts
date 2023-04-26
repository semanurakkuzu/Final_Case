import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { StarShip } from '../types/Starship'


interface StarShipState {
  starShipData: { 
    pagesParams: Array<String>
    pages:[ {
      count: Number
      next: String
      previous : null
      results: Array<StarShip> 
    }]} | null
}

const initialState: StarShipState = {
  starShipData: null
}

export const StarShipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setStarShips: (state, action) => {
      state.starShipData = action.payload
    }, 
  },
})

export const { setStarShips } = StarShipsSlice.actions
export const selectStarShips = (state: RootState) => state.starships.starShipData

export default StarShipsSlice.reducer