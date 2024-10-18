import React from 'react'
import './Tiket.css'

export default function Tiket() {
  return (
    <section className="tiket">
      <img className="tiket__image" src="/img/S7Logo.svg" alt="Лого S7" />
      <p className="tiket__price">13 400 Р</p>
      <div className="tiket__route_and_time_to">
        <p className="tiket__route">MOW - HKT</p>
        <p className="tiket__time">10:45 - 08:00</p>
      </div>
      <div className="tiket__route_and_time_from">
        <p className="tiket__route">MOW - HKT</p>
        <p className="tiket__time">10:45 - 08:00</p>
      </div>
      <div className="tiket__time_in_light_to">
        <p className="tiket__in_light">В ПУТИ</p>
        <p className="tiket__time_in_light">21ч 15м</p>
      </div>
      <div className="tiket__time_in_light_from">
        <p className="tiket__in_light">В ПУТИ</p>
        <p className="tiket__time_in_light">13ч 30м</p>
      </div>
      <div className="tiket__transfer_to">
        <p className="tiket__transfer">2 ПЕРЕСАДКИ</p>
        <p className="tiket__towns">HKG, JNB</p>
      </div>
      <div className="tiket__transfer_from">
        <p className="tiket__transfer">1 ПЕРЕСАДКА</p>
        <p className="tiket__towns">HKG</p>
      </div>
    </section>
  )
}
