import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider = ({children}) => {
    const [theme,settheme]=useState('light')

    const toggleTheme=()=>{
        settheme(prevTheme=>(prevTheme==='light' ? 'dark' : 'light'))
    }
  return (
    <div>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
