import { useState, useContext } from 'react'

import { DarkModeContext } from '../../../contexts/DarkMode'
import styles from './Toggle.css'

const Toggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)

  const clickHandler: React.MouseEventHandler<HTMLAnchorElement> = e => {
    setDarkMode(!darkMode)
  }

  return (
    <a onClick={clickHandler} suppressHydrationWarning>
      {darkMode ? 'ダークモード' : 'ライトモード'}
    </a>
  )
}

export default Toggle
