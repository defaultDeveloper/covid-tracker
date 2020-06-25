import React, { useState } from 'react'
import styles from './App.module.css'
import {LabelBottomNavigation } from './Component'
import covimage from './images/image.png'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Typography, Grid } from '@material-ui/core'
import Routes from "./routes"
import { BrowserRouter as Router} from "react-router-dom"

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



  const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={styles.container}>

        <img className={styles.image} src={covimage} alt="COVID-19" />
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Light</Grid>
            <Grid item>
              <AntSwitch checked={check} onChange={toggleDarkTheme} />
            </Grid>
            <Grid item>Dark</Grid>
          </Grid>
        </Typography>
        <Router>
          <div className={styles.content}>
          <Routes />
          </div>
          <LabelBottomNavigation />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
