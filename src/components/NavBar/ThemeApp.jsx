import React from 'react'
import ThemeProvider from './ThemeProvider'
import Navbar from './Navbar'

const ThemeApp = () => {
  return (
    <ThemeProvider>
      <Navbar/>
    </ThemeProvider>
  )
}

export default ThemeApp
