import React from 'react'
import './Tiket.css'
import { useSelector } from 'react-redux'
import { minutesToHours, add } from 'date-fns'

export default function Tiket() {
  let filterB = useSelector((state) => state.buttonSelected.items)
  let count = 0

  console.log(filterB.tickets)
  const hours = (a, b) => {
    return add(new Date(a), {
      minutes: b,
    })
      .getHours()
      .toString()
  }
  const minutes = (a, b) => {
    return add(new Date(a), {
      minutes: b,
    })
      .getMinutes()
      .toString()
  }
  if (filterB.tickets === undefined) {
    filterB = null
  }
  let tikets
  if (filterB === null) {
    tikets = null
  } else {
    tikets = filterB.tickets.map((item) => {
      count += 1
      return (
        <section className="tiket" key={count}>
          <img className="tiket__image" src={`https://pics.avs.io/99/36/${item.carrier}.png`} alt="Лого S7" />
          <p className="tiket__price">{item.price} Р</p>
          <div className="tiket__route_and_time_to">
            <p className="tiket__route">
              {item.segments[0].origin} - {item.segments[0].destination}
            </p>
            <p className="tiket__time">
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
          <div className="tiket__route_and_time_from">
            <p className="tiket__route">
              {item.segments[1].origin} - {item.segments[1].destination}
            </p>
            <p className="tiket__time">
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
          <div className="tiket__time_in_light_to">
            <p className="tiket__in_light">В ПУТИ</p>
            <p className="tiket__time_in_light">
              {minutesToHours(item.segments[0].duration)}ч{' '}
              {item.segments[0].duration - minutesToHours(item.segments[0].duration) * 60}м
            </p>
          </div>
          <div className="tiket__time_in_light_from">
            <p className="tiket__in_light">В ПУТИ</p>
            <p className="tiket__time_in_light">
              {minutesToHours(item.segments[1].duration)}ч{' '}
              {item.segments[1].duration - minutesToHours(item.segments[1].duration) * 60}м
            </p>
          </div>
          <div className="tiket__transfer_to">
            <p className="tiket__transfer">
              {item.segments[0].stops.length === 0 && 'БЕЗ ПЕРЕСАДОК'}
              {item.segments[0].stops.length === 1 && `${item.segments[0].stops.length} ПРЕСАДКА`}
              {item.segments[0].stops.length >= 2 && `${item.segments[0].stops.length} ПРЕСАДКИ`}
            </p>
            <p className="tiket__towns">{item.segments[0].stops.join(', ')}</p>
          </div>
          <div className="tiket__transfer_from">
            <p className="tiket__transfer">
              {item.segments[1].stops.length === 0 && 'БЕЗ ПЕРЕСАДОК'}
              {item.segments[1].stops.length === 1 && `${item.segments[1].stops.length} ПРЕСАДКА`}
              {item.segments[1].stops.length >= 2 && `${item.segments[1].stops.length} ПРЕСАДКИ`}
            </p>
            <p className="tiket__towns">{item.segments[1].stops.join(', ')}</p>
          </div>
        </section>
      )
    })
  }
  return <div>{tikets}</div>
}
