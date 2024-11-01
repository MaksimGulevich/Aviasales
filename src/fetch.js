import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchData, fetchDataTicket } from './store/Slice'

const dispatch = useDispatch()
useEffect(() => {
  dispatch(fetchData()).then((resultAction) => {
    // Проверяем, был ли первый запрос успешным
    if (resultAction.meta.requestStatus === 'fulfilled') {
      // Получаем searchId из первого запроса
      const { searchId } = resultAction.payload
      // Выполняем второй запрос с использованием searchId
      dispatch(fetchDataTicket(searchId))
    } else {
      console.error('Первый запрос завершился с ошибкой')
    }
  })
}, [])
