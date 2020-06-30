import axios from 'axios'

/**
 * Get either global data or based on the selected country.
 */
const url = 'https://covid19.mathdro.id/api'
export const fetchData = async (country)=>{
 try {
     let finalUrl=""
     if(country==='global'){
         finalUrl=`${url}`
    }else{
         finalUrl=`${url}/countries/${country}`
     }
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(finalUrl)
    return {confirmed,recovered,deaths,lastUpdate}
 } catch (error) {
     console.error(error.message)
 }
}

/**
 * Get daily data for Global - used for the line chart
 */
export const fetchDailyData = async ()=>{
    try{
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map(data=>{
            return {
                confirmed: data.confirmed.total,
                deaths:data.deaths.total,
                date :data.reportDate
            }
        })
        return modifiedData
    }
    catch(error){
    console.log(error.message)
    }
}

/**
 * Get the list of countries
 */
export const fetchCountries = async ()=>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
        return countries.map(country=> country.name)
    }
    catch(error){
    console.log(error.message)
    }
}

/**
 * Get the headlines on COVID
 */
export const fetchNews = async ()=>{
    try{
        //Was gettting cors error with the original  url hence added the !st part
        const {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://covid-news-server.herokuapp.com/news`)
        return data
    }
    catch(error){
    console.log(error.message)
    }
}

/**
 * Gets the daily details of Indian states
 */
export const fetchStateData = async ()=>{
    try{
        const {data} = await axios.get(`${url}/countries/India/confirmed`)
        return data
    }
    catch(error){
    console.log(error.message)
    }
}