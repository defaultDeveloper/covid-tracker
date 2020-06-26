import React, { useState } from 'react'
import styles from './App.module.css'
import { LabelBottomNavigation,ButtonAppBar } from './Component'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from "./routes"
import { HashRouter as Router } from "react-router-dom"

const App = () => {

  const [check, setCheck] = useState(false)
  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  })

  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light"
    setTheme({
      palette: {
        type: newPaletteType
      }
    })
    setCheck(check === true ? false : true)
  }

  const muiTheme = createMuiTheme(theme)

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={styles.container}>
        <ButtonAppBar toggleDarkTheme={toggleDarkTheme}/>
        <Router>
          <div className={styles.content}>
            <Routes />
          </div>
            <LabelBottomNavigation/>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
