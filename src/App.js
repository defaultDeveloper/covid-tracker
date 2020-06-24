import React,{useEffect,useState} from 'react'
import styles from './App.module.css'
import { Cards, Charts, Countrypicker } from './Component'
import { fetchData } from './api'
import covimage from './images/image.png'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Button} from '@material-ui/core'

const App = () => {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('India')
    const [theme, setTheme] = useState({
        palette: {
          type: "light"
        }
      });

      const toggleDarkTheme = () => {
        let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
        setTheme({
          palette: {
            type: newPaletteType
          }
        });
      }; 

      const muiTheme = createMuiTheme(theme);
    
    useEffect(()=> {
            const init = async() => {
                const fetchedData = await fetchData(country)
                setData(fetchedData)
                setCountry(country)
            }
            init()
        },[country])

    const handleCountryChange = async (country) => {
        console.log(country)
        const fetchedData = await fetchData(country)
        setData(fetchedData)
        setCountry(country)
    }

        return (
            <ThemeProvider theme={muiTheme}>
                <CssBaseline/>
                    <div className={styles.container}>
                        <img className={styles.image} src={covimage} alt="COVID-19" />
                        <Cards data={data} country={country} theme={theme}/>
                        <Countrypicker handleCountryChange={handleCountryChange} />
                        <Charts data={data} country={country} />
                        <Button onClick={()=>toggleDarkTheme()}>{theme.palette.type==='light'?'DARK' : 'LIGHT'}</Button>
                    </div>
            </ThemeProvider>
        )
    }

export default App
