import { createSlice } from '@reduxjs/toolkit'

const buttonElseSlice = createSlice({
  name: 'buttonElse',
  initialState: {
    else: 5,
  },

  reducers: {
    onElse: (state) => ({
      ...state,
      else: state.else + 5,
    }),
  },
})

export const { onElse } = buttonElseSlice.actions
export default buttonElseSlice.reducer
