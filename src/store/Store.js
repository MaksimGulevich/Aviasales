import { configureStore } from '@reduxjs/toolkit'

import buttonSelectedReducer from './Slice'
import checkboxCheckedReducer from './checkboxSlice'

export default configureStore({
  reducer: {
    buttonSelected: buttonSelectedReducer,
    checkboxChecked: checkboxCheckedReducer,
  },
})
