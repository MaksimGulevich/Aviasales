import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { onCheapest, onFastest, onOptimal } from '../store/Slice'

import classes from './Button.module.css'

export default function Button() {
  const dispatch = useDispatch()
  const filterButtons = useSelector((state) => state.buttonSelected.buttonSelected)
  const onCheap = () => dispatch(onCheapest('cheapest'))
  const onFast = () => dispatch(onFastest('fastest'))
  const onOptim = () => dispatch(onOptimal('optimal'))

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
      selectedButton = onCheap
    } else if (name === 'fastest') {
      selectedButton = onFast
    } else if (name === 'optimal') {
      selectedButton = onOptim
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
