import { createSlice } from '@reduxjs/toolkit'

const buttonSelectedSlice = createSlice({
  name: 'buttonSelected',
  initialState: {
    buttonSelected: 'none',
  },
  reducers: {
    onCheapest: (state, action) => ({
      ...state,
      buttonSelected: action.payload,
    }),
    onFastest: (state, action) => ({
      ...state,
      buttonSelected: action.payload,
    }),
    onOptimal: (state, action) => ({
      ...state,
      buttonSelected: action.payload,
    }),
  },
})

export const { onCheapest, onFastest, onOptimal } = buttonSelectedSlice.actions

export default buttonSelectedSlice.reducer
