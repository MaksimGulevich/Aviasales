import ButtonElse from '../ButtunElse/ButtonElse'
import Main from '../Main/Main'
import Button from '../Button/Button'
import Tiket from '../Tiket/Tiket'
import Filter from '../Filter/Filter'
import ProgressBar from '../ProgressBar/ProgressBar'

import classes from './App.module.css'

export default function App() {
  return (
    <div className={classes.flex}>
      <img className={classes.logo} src="/img/Logo.svg" alt="Логотип Авиасейлс" />
      <div className={classes.page}>
        <Filter />
        <Main>
          <Button />
          <ProgressBar />
          <Tiket />
          <ButtonElse />
        </Main>
      </div>
    </div>
  )
}
