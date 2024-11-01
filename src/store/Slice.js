import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import addTickets from './addTickets'

export const fetchData = createAsyncThunk('data/fetchSearchId', async () => {
  const responce = await fetch('https://aviasales-test-api.kata.academy/search')
  const data = await responce.json()
  return data
})

export const fetchDataTicket = createAsyncThunk('data/fetchTickets', async (searchId, { dispatch }) => {
  const fetchWithRetry = async () => {
    try {
      const responce = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      if (!responce.ok) {
        throw new Error('Ошибка сетевого запроса')
      }
      const data = await responce.json()
      dispatch(addTickets(data.tickets))
      if (!data.stop) {
        await fetchWithRetry()
      }
    } catch (error) {
      await fetchWithRetry()
    }
  }
  await fetchWithRetry()
})

const buttonSelectedSlice = createSlice({
  name: 'buttonSelected',
  initialState: {
    buttonSelected: 'none',
    id: null,
    items: [],
    status: 'none',
    error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => ({
        ...state,
        status: 'loading', // Когда запрос отправлен, статус "loading"
      }))
      .addCase(fetchData.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded', // Когда запрос выполнен успешно, статус "succeeded"
        id: action.payload.searchId, // Сохраняем данные в состоянии
      }))
      .addCase(fetchData.rejected, (state, action) => ({
        ...state,
        status: 'failed', // Если запрос завершён с ошибкой, статус "failed"
        error: action.error.message, // Сохраняем ошибку в состоянии
      }))
      // Запрос по билетам
      .addCase(fetchDataTicket.pending, (state) => ({
        ...state,
        status: 'loading', // Когда запрос отправлен, статус "loading"
      }))
      .addCase(fetchDataTicket.fulfilled, (state) => ({
        ...state,
        status: 'succeeded', // Когда запрос выполнен успешно, статус "succeeded"
      }))
      .addCase(fetchDataTicket.rejected, (state, action) => ({
        ...state,
        status: 'failed', // Если запрос завершён с ошибкой, статус "failed"
        error: action.error.message, // Сохраняем ошибку в состоянии
      }))
      .addCase(addTickets, (state, action) => ({
        ...state,
        items: state.items.concat(action.payload),
      }))
  },
})

export const { onCheapest, onFastest, onOptimal } = buttonSelectedSlice.actions

export default buttonSelectedSlice.reducer
