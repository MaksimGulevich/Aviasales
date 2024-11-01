import React from 'react'
import './ProgressBar.css'
import { useSelector } from 'react-redux'

export default function ProgressBar() {
  const tiketsStatus = useSelector((state) => state.buttonSelected.statusTickets)

  let clazzNameWidth
  let clazzName

  if (tiketsStatus === 'none') {
    clazzName = 'none'
  }

  if (tiketsStatus === 'loading') {
    clazzNameWidth = 'progress-bar-progressed'
    clazzName = ''
  }
  if (tiketsStatus === 'succeeded') {
    clazzNameWidth = 'progress-bar-succeeded'
    clazzName = 'progress-none'
  }

  return (
    <div
      className={`progress ${clazzName}`}
      role="progressbar"
      aria-label="Animated striped example"
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div className={`progress-bar progress-bar-striped progress-bar-animated ${clazzNameWidth}`} />
    </div>
  )
}
