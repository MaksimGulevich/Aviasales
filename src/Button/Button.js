import React from 'react'

import classes from './Button.module.css'

export default function Button({ filterButtons, onCheapest, onFastest, onOptimal }) {
  console.log(classes)
  const buttons = [
    { name: 'cheapest', label: 'САМЫЙ ДЕШЕВЫЙ' },
    { name: 'fastest', label: 'САМЫЙ БЫСТРЫЙ' },
    { name: 'optimal', label: 'ОПТИМАЛЬНЫЙ' },
  ]

  const button = buttons.map(({ name, label }) => {
    const isActive = filterButtons === name
    let clazzName
    if (isActive === true) {
      clazzName = classes.menu__selected
    }
    let selectedButton
    if (name === 'cheapest') {
      selectedButton = onCheapest
    } else if (name === 'fastest') {
      selectedButton = onFastest
    } else if (name === 'optimal') {
      selectedButton = onOptimal
    } else if (name === 'none') {
      selectedButton = null
    }
    return (
      <li key={name} className={`${classes.menu__item}  ${clazzName}`}>
        <button className={`${classes.menu__button} ${clazzName}`} type="button" onClick={selectedButton}>
          <span className={classes.menu__span}>{label}</span>
        </button>
      </li>
    )
  })

  return (
    <section className={classes.menu}>
      <ul className={classes.menu__list}>{button}</ul>
    </section>
  )
}
