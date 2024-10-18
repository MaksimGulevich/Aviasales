import React from 'react'

import classes from './Filter.module.css'

export default function Filter() {
  return (
    <aside className={classes.filters}>
      <h2 className={classes.filters__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h2>
      <ul className={classes.filters__list}>
        <li className={classes.filters__item}>
          <label htmlFor="checked1" className={classes.filters__label}>
            <input className={classes.filters__checkbox} type="checkbox" id="checked1" name="checked1" />
            <span className={classes.filters__span}>Все</span>
          </label>
        </li>
        <li className={classes.filters__item}>
          <label htmlFor="checked2" className={classes.filters__label}>
            <input className={classes.filters__checkbox} type="checkbox" id="checked2" name="checked2" />
            <span className={classes.filters__span}>Без пересадок</span>
          </label>
        </li>
        <li className={classes.filters__item}>
          <label htmlFor="checked3" className={classes.filters__label}>
            <input className={classes.filters__checkbox} type="checkbox" id="checked3" name="checked3" />
            <span className={classes.filters__span}>1 пересадка</span>{' '}
          </label>
        </li>
        <li className={classes.filters__item}>
          <label htmlFor="checked4" className={classes.filters__label}>
            <input className={classes.filters__checkbox} type="checkbox" id="checked4" name="checked4" />
            <span className={classes.filters__span}>2 пересадка</span>
          </label>
        </li>
        <li className={classes.filters__item}>
          <label htmlFor="checked5" className={classes.filters__label}>
            <input className={classes.filters__checkbox} type="checkbox" id="checked5" name="checked5" />
            <span className={classes.filters__span}>3 пересадка</span>
          </label>
        </li>
      </ul>
    </aside>
  )
}
