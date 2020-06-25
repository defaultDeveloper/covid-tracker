import React, { useEffect, useState } from 'react'
import { Cards, Countrypicker, Charts } from './Component'
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
        <div className={styles.container}>
            <Cards data={data} country={country}/>
            <Countrypicker handleCountryChange={handleCountryChange} />
            <Charts data={data} country={country} />
        </div>
    )
}

export default Homepage
