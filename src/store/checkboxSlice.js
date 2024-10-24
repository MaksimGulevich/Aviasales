import { createSlice } from '@reduxjs/toolkit'

const checkboxCheckedSlice = createSlice({
  name: 'checkboxChecked',
  initialState: {
    checkboxChecked: {
      all: '',
      notransfer: '',
      onetransfer: '',
      twotransfer: '',
      threetransfer: '',
    },
  },

  reducers: {
    onAll(state) {
      if (state.checkboxChecked.all !== 'checked') {
        return {
          ...state,
          checkboxChecked: {
            ...state.checkboxChecked,
            all: 'checked',
            notransfer: 'checked',
            onetransfer: 'checked',
            twotransfer: 'checked',
            threetransfer: 'checked',
          },
        }
      }
      if (state.checkboxChecked.all === 'checked') {
        return {
          ...state,
          checkboxChecked: {
            ...state.checkboxChecked,
            all: '',
            notransfer: '',
            onetransfer: '',
            twotransfer: '',
            threetransfer: '',
          },
        }
      }
      return state
    },
    onNoTransfer(state) {
      if (state.checkboxChecked.notransfer !== 'checked') {
        if (
          state.checkboxChecked.onetransfer === 'checked' &&
          state.checkboxChecked.twotransfer === 'checked' &&
          state.checkboxChecked.threetransfer === 'checked'
        ) {
          return {
            ...state,
            checkboxChecked: {
              ...state.checkboxChecked,
              all: 'checked',
              notransfer: 'checked',
            },
          }
        }
        return {
          ...state,
          checkboxChecked: {
            ...state.checkboxChecked,
            notransfer: 'checked',
          },
        }
      }
      if (state.checkboxChecked.notransfer === 'checked') {
        if (
          state.checkboxChecked.onetransfer === 'checked' &&
          state.checkboxChecked.twotransfer === 'checked' &&
          state.checkboxChecked.threetransfer === 'checked'
        ) {
          return {
            ...state,
            checkboxChecked: {
              ...state.checkboxChecked,
              all: '',
              notransfer: '',
            },
          }
        }
        return {
          ...state,
          checkboxChecked: {
            ...state.checkboxChecked,
            notransfer: '',
          },
        }
      }
      return state
    },
    onOneTransfer(state) {
      if (state.checkboxChecked.onetransfer !== 'checked') {
        if (
          state.checkboxChecked.notransfer === 'checked' &&
          state.checkboxChecked.twotransfer === 'checked' &&
          state.checkboxChecked.threetransfer === 'checked'
        ) {
          return {
            ...state,
            checkboxChecked: {
              ...state.checkboxChecked,
              all: 'checked',
              onetransfer: 'checked',
            },
          }
        }
        return {
          ...state,
          checkboxChecked: {
            ...state.checkboxChecked,
            onetransfer: 'checked',
          },
        }
      }
      if (state.checkboxChecked.onetransfer === 'checked') {
        if (
          state.checkboxChecked.notransfer === 'checked' &&
          state.checkboxChecked.twotransfer === 'checked' &&
          state.checkboxChecked.threetransfer === 'checked'
        ) {
          return {
            ...state,
            checkboxChecked: {
              ...state.checkboxChecked,
              all: '',
              onetransfer: '',
            },
          }
        }
        return {
          ...state,
          checkboxChecked: {
            ...state.checkboxChecked,
            onetransfer: '',
          },
        }
      }
      return state
    },
    onTwoTransfer(state) {
      if (state.checkboxChecked.twotransfer !== 'checked') {
        if (
          state.checkboxChecked.notransfer === 'checked' &&
          state.checkboxChecked.onetransfer === 'checked' &&
          state.checkboxChecked.threetransfer === 'checked'
        ) {
          return {
            ...state,
            checkboxChecked: {
              ...state.checkboxChecked,
              all: 'checked',
              twotransfer: 'checked',
            },
          }
        }
        return {
          ...state,
          checkboxChecked: {
            ...state.checkboxChecked,
            twotransfer: 'checked',
          },
        }
      }
      if (state.checkboxChecked.twotransfer === 'checked') {
        if (
          state.checkboxChecked.notransfer === 'checked' &&
          state.checkboxChecked.onetransfer === 'checked' &&
          state.checkboxChecked.threetransfer === 'checked'
        ) {
          return {
            ...state,
            checkboxChecked: {
              ...state.checkboxChecked,
              all: '',
              twotransfer: '',
            },
          }
        }
        return {
          ...state,
          checkboxChecked: {
            ...state.checkboxChecked,
            twotransfer: '',
          },
        }
      }
      return state
    },
    onThreeTransfer(state) {
      if (state.checkboxChecked.threetransfer !== 'checked') {
        if (
          state.checkboxChecked.notransfer === 'checked' &&
          state.checkboxChecked.onetransfer === 'checked' &&
          state.checkboxChecked.twotransfer === 'checked'
        ) {
          return {
            ...state,
            checkboxChecked: {
              ...state.checkboxChecked,
              all: 'checked',
              threetransfer: 'checked',
            },
          }
        }
        return {
          ...state,
          checkboxChecked: {
            ...state.checkboxChecked,
            threetransfer: 'checked',
          },
        }
      }
      if (state.checkboxChecked.threetransfer === 'checked') {
        if (
          state.checkboxChecked.notransfer === 'checked' &&
          state.checkboxChecked.onetransfer === 'checked' &&
          state.checkboxChecked.twotransfer === 'checked'
        ) {
          return {
            ...state,
            checkboxChecked: {
              ...state.checkboxChecked,
              all: '',
              threetransfer: '',
            },
          }
        }
        return {
          ...state,
          checkboxChecked: {
            ...state.checkboxChecked,
            threetransfer: '',
          },
        }
      }
      return state
    },
  },
})

export const { onAll, onNoTransfer, onOneTransfer, onTwoTransfer, onThreeTransfer } = checkboxCheckedSlice.actions
export default checkboxCheckedSlice.reducer
