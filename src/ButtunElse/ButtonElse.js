import React from 'react'
import { useDispatch } from 'react-redux'

import { onElse } from '../store/buttonElseSlice'

import classes from './ButtonElse.module.css'

export default function ButtonElse() {
  const dispatch = useDispatch()

  return (
    <button className={classes.button_else} type="button" aria-label="button_else" onClick={() => dispatch(onElse(5))}>
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
    </button>
  )
}
