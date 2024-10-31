// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'

import ButtonElse from '../ButtunElse/ButtonElse'
import Main from '../Main/Main'
import Button from '../Button/Button'
import Tiket from '../Tiket/Tiket'
import Filter from '../Filter/Filter'

import classes from './App.module.css'

export default function App() {
  //   const [buttonSelected, setButtonSelected] = useState('none')

  return (
    <div className={classes.flex}>
      <img className={classes.logo} src="/img/Logo.svg" alt="Логотип Авиасейлс" />
      <div className={classes.page}>
        <Filter />
        <Main>
          <Button />
          <Tiket />
          <ButtonElse />
        </Main>
      </div>
    </div>
  )
}
