import { configureStore } from '@reduxjs/toolkit'

import buttonSelectedReducer from './Slice'
import checkboxCheckedReducer from './checkboxSlice'
import buttonElseReducer from './buttonElseSlice'

export default configureStore({
  reducer: {
    buttonSelected: buttonSelectedReducer,
    checkboxChecked: checkboxCheckedReducer,
    buttonElse: buttonElseReducer,
  },
})
