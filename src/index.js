// import React, { useState, useEffect, useMemo } from 'react'
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
// import { configureStore } from '@reduxjs/toolkit'
// import { Provider } from 'react-redux'

import classes from './index.module.css'
import Main from './Main/Main'
import Button from './Button/Button'
import Tiket from './Tiket/Tiket'
import Filter from './Filter/Filter'
import ButtonElse from './ButtunElse/ButtonElse'

function App() {
  const [buttonSelected, setButtonSelected] = useState('none')
  return (
    <div className={classes.flex}>
      <img className={classes.logo} src="/img/Logo.svg" alt="Логотип Авиасейлс" />
      <div className={classes.page}>
        <Filter />
        <Main>
          <Button
            onCheapest={() => setButtonSelected('cheapest')}
            onFastest={() => setButtonSelected('fastest')}
            onOptimal={() => setButtonSelected('optimal')}
            filterButtons={buttonSelected}
          />
          <Tiket />
          <Tiket />
          <Tiket />
          <ButtonElse />
        </Main>
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App />)
