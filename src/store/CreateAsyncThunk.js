import { createAsyncThunk } from '@reduxjs/toolkit'

import { addTickets } from './Slice'

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
        console.log('Еще запрос')

        await fetchWithRetry()
      }
      console.log(data.stop)
    } catch (error) {
      console.log('ошибка')
      await fetchWithRetry()
    }
  }
  await fetchWithRetry()
})
