import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { onAll, onNoTransfer, onOneTransfer, onTwoTransfer, onThreeTransfer } from '../store/checkboxSlice'

import classes from './Filter.module.css'

export default function Filter() {
  const dispatch = useDispatch()

  const checkboxes = [
    { name: 'all', label: 'Все' },
    { name: 'notransfers', label: 'Без пересадок' },
    { name: 'onetransfer', label: '1 пересадка' },
    { name: 'twotransfer', label: '2 пересадка' },
    { name: 'threetransfer', label: '3 пересадка' },
  ]

  const checkbox = checkboxes.map(({ name, label }) => {
    let checked
    let onChecked
    if (name === 'all') {
      onChecked = () => dispatch(onAll())
      checked = useSelector((state) => state.checkboxChecked.checkboxChecked.all)
    } else if (name === 'notransfers') {
      onChecked = () => dispatch(onNoTransfer())
      checked = useSelector((state) => state.checkboxChecked.checkboxChecked.notransfer)
    } else if (name === 'onetransfer') {
      onChecked = () => dispatch(onOneTransfer())
      checked = useSelector((state) => state.checkboxChecked.checkboxChecked.onetransfer)
    } else if (name === 'twotransfer') {
      onChecked = () => dispatch(onTwoTransfer())
      checked = useSelector((state) => state.checkboxChecked.checkboxChecked.twotransfer)
    } else if (name === 'threetransfer') {
      onChecked = () => dispatch(onThreeTransfer())
      checked = useSelector((state) => state.checkboxChecked.checkboxChecked.threetransfer)
    }

    return (
      <li key={name} className={classes.filters__item}>
        <label htmlFor={name} className={classes.filters__label}>
          <input
            checked={checked}
            onChange={onChecked}
            className={classes.filters__checkbox}
            type="checkbox"
            id={name}
          />
          <span className={classes.filters__span}>{label}</span>
        </label>
      </li>
    )
  })

  return (
    <aside className={classes.filters}>
      <h2 className={classes.filters__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <ul className={classes.filters__list}>{checkbox}</ul>
    </aside>
  )
}
