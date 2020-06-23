import React,{useEffect,useState} from 'react'
import styles from './App.module.css'
import { Cards, Charts, Countrypicker } from './Component'
import { fetchData } from './api'
import covimage from './images/image.png'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Component/globalStyles";
import { lightTheme, darkTheme } from "./Component/Themes"
import { useDarkMode } from "./Component/useDarkMode"
import Toggle from "./Component/Toggler"

const App = () => {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('India')
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
            <ThemeProvider theme={themeMode} >
                <>
                    <GlobalStyles />
                    <div className={styles.container}>
                        <img className={styles.image} src={covimage} alt="COVID-19" />
                        <Cards data={data} country={country} theme={theme}/>
                        <Countrypicker handleCountryChange={handleCountryChange} />
                        <Charts data={data} country={country} />
                        {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
                    </div>
                </>
            </ThemeProvider>
        )
    }

export default App
