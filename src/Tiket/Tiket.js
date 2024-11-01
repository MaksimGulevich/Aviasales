import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { minutesToHours, add } from 'date-fns'

import { fetchData, fetchDataTicket } from '../store/Slice'

import classes from './Tiket.module.css'

export default function Tiket() {
  const dispatch = useDispatch()
  const arrayOfTickets = useSelector((state) => state.buttonSelected.items)
  const buttonSelected = useSelector((state) => state.buttonSelected.buttonSelected)
  const checkboxSelected = useSelector((state) => state.checkboxChecked.checkboxChecked)
  const buttonElseItems = useSelector((state) => state.buttonElse.else)

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

  let count = 0

  // Функция подсчета часов прибытия
  const hours = (a, b) => {
    return add(new Date(a), {
      minutes: b,
    })
      .getHours()
      .toString()
  }
  // Функция подсчета минут прибытия
  const minutes = (a, b) => {
    return add(new Date(a), {
      minutes: b,
    })
      .getMinutes()
      .toString()
  }
  // Создаем новый массив с которым будем работать
  const tikets = [...arrayOfTickets]
  // Фильтруем в зависимости от выбранных чекбоксов
  let finalTickets = []
  if (
    checkboxSelected.notransfer !== 'checked' &&
    checkboxSelected.onetransfer !== 'checked' &&
    checkboxSelected.twotransfer !== 'checked' &&
    checkboxSelected.threetransfer !== 'checked'
  ) {
    finalTickets = tikets
  } else {
    finalTickets = []
  }

  if (checkboxSelected.notransfer === 'checked') {
    finalTickets = finalTickets.concat(
      tikets.filter((item) => {
        return item.segments[0].stops.length === 0
      })
    )
  }

  if (checkboxSelected.onetransfer === 'checked') {
    finalTickets = finalTickets.concat(
      tikets.filter((item) => {
        return item.segments[0].stops.length === 1
      })
    )
  }

  if (checkboxSelected.twotransfer === 'checked') {
    finalTickets = finalTickets.concat(
      tikets.filter((item) => {
        return item.segments[0].stops.length === 2
      })
    )
  }

  if (checkboxSelected.threetransfer === 'checked') {
    finalTickets = finalTickets.concat(
      tikets.filter((item) => {
        return item.segments[0].stops.length === 3
      })
    )
  }
  // Задаем длину массива билетов равную 5

  // Сортируем в зависимости от фильтра
  if (buttonSelected === 'cheapest') {
    finalTickets = finalTickets.sort((a, b) => {
      return a.price - b.price
    })
  } else if (buttonSelected === 'fastest') {
    finalTickets = finalTickets.sort((a, b) => {
      return a.segments[0].duration - b.segments[0].duration
    })
  } else if (buttonSelected === 'optimal') {
    finalTickets = finalTickets.sort((a, b) => {
      return a.segments[0].duration - b.segments[0].duration || a.price - b.price
    })
  }
  finalTickets.length = buttonElseItems

  finalTickets = finalTickets.map((item) => {
    count += 1

    return (
      <section className={classes.tiket} key={count}>
        <img className={classes.tiket__image} src={`https://pics.avs.io/99/36/${item.carrier}.png`} alt="Лого S7" />
        <p className={classes.tiket__price}>
          {item.price < 10000 && item.price.toString().substr(0, 2)}
          {item.price > 10000 &&
            item.price < 100000 &&
            `${item.price.toString().substr(0, 2)} ${item.price.toString().substr(2)}`}
          {item.price > 100000 && `${item.price.toString().substr(0, 3)} ${item.price.toString().substr(3)}`} Р
        </p>
        <div className={classes.tiket__route_and_time_to}>
          <p className={classes.tiket__route}>
            {item.segments[0].origin} - {item.segments[0].destination}
          </p>
          <p className={classes.tiket__time}>
            {new Date(item.segments[0].date).getHours().toString() < 10
              ? `0${new Date(item.segments[0].date).getHours().toString()}`
              : new Date(item.segments[0].date).getHours().toString()}
            :
            {new Date(item.segments[0].date).getMinutes().toString() < 10
              ? `0${new Date(item.segments[0].date).getMinutes().toString()}`
              : new Date(item.segments[0].date).getMinutes().toString()}{' '}
            -{' '}
            {hours(item.segments[0].date, item.segments[0].duration) < 10
              ? `0${hours(item.segments[0].date, item.segments[0].duration)}`
              : hours(item.segments[0].date, item.segments[0].duration)}
            :
            {minutes(item.segments[0].date, item.segments[0].duration) < 10
              ? `0${minutes(item.segments[0].date, item.segments[0].duration)}`
              : minutes(item.segments[0].date, item.segments[0].duration)}
          </p>
        </div>
        <div className={classes.tiket__route_and_time_from}>
          <p className={classes.tiket__route}>
            {item.segments[1].origin} - {item.segments[1].destination}
          </p>
          <p className={classes.tiket__time}>
            {new Date(item.segments[1].date).getHours().toString() < 10
              ? `0${new Date(item.segments[1].date).getHours().toString()}`
              : new Date(item.segments[1].date).getHours().toString()}
            :
            {new Date(item.segments[1].date).getMinutes().toString() < 10
              ? `0${new Date(item.segments[1].date).getMinutes().toString()}`
              : new Date(item.segments[1].date).getMinutes().toString()}{' '}
            -{' '}
            {hours(item.segments[1].date, item.segments[1].duration) < 10
              ? `0${hours(item.segments[1].date, item.segments[1].duration)}`
              : hours(item.segments[1].date, item.segments[1].duration)}
            :
            {minutes(item.segments[1].date, item.segments[1].duration) < 10
              ? `0${minutes(item.segments[1].date, item.segments[1].duration)}`
              : minutes(item.segments[1].date, item.segments[1].duration)}
          </p>
        </div>
        <div className={classes.tiket__time_in_light_to}>
          <p className={classes.tiket__in_light}>В ПУТИ</p>
          <p className={classes.tiket__time_in_light}>
            {minutesToHours(item.segments[0].duration)}ч{' '}
            {item.segments[0].duration - minutesToHours(item.segments[0].duration) * 60}м
          </p>
        </div>
        <div className={classes.tiket__time_in_light_from}>
          <p className={classes.tiket__in_light}>В ПУТИ</p>
          <p className={classes.tiket__time_in_light}>
            {minutesToHours(item.segments[1].duration)}ч{' '}
            {item.segments[1].duration - minutesToHours(item.segments[1].duration) * 60}м
          </p>
        </div>
        <div className={classes.tiket__transfer_to}>
          <p className={classes.tiket__transfer}>
            {item.segments[0].stops.length === 0 && 'БЕЗ ПЕРЕСАДОК'}
            {item.segments[0].stops.length === 1 && `${item.segments[0].stops.length} ПРЕСАДКА`}
            {item.segments[0].stops.length >= 2 && `${item.segments[0].stops.length} ПРЕСАДКИ`}
          </p>
          <p className={classes.tiket__towns}>{item.segments[0].stops.join(', ')}</p>
        </div>
        <div className={classes.tiket__transfer_from}>
          <p className={classes.tiket__transfer}>
            {item.segments[1].stops.length === 0 && 'БЕЗ ПЕРЕСАДОК'}
            {item.segments[1].stops.length === 1 && `${item.segments[1].stops.length} ПРЕСАДКА`}
            {item.segments[1].stops.length >= 2 && `${item.segments[1].stops.length} ПРЕСАДКИ`}
          </p>
          <p className={classes.tiket__towns}>{item.segments[1].stops.join(', ')}</p>
        </div>
      </section>
    )
  })

  return <div>{finalTickets}</div>
}
