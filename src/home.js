import React, { useEffect, useState } from 'react'
import { Cards, Countrypicker, Charts,SimpleTable } from './Component'
import styles from './App.module.css'
import { fetchData } from './api'


const Homepage = () => {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('India')

    useEffect(() => {
        const init = async () => {
            const fetchedData = await fetchData(country)
            setData(fetchedData)
            setCountry(country)
        }
        init()
    }, [country])

    const handleCountryChange = async (country) => {
        console.log(country)
        const fetchedData = await fetchData(country)
        setData(fetchedData)
        setCountry(country)
    }

    return (
        <div className={styles.home}>
            <Countrypicker handleCountryChange={handleCountryChange} />
            <Cards data={data} country={country}/>
            <Charts data={data} country={country} />
            {country==='India'?<SimpleTable/> : null}
        </div>
    )
}

export default Homepage
