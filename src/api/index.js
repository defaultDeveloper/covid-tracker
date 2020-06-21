import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'
export const fetchData = async (country)=>{
 try {
    if(!country){
        country='India'
    }
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(`${url}/countries/${country}`)
    return {confirmed,recovered,deaths,lastUpdate}
 } catch (error) {
     console.error(error.message)
 }
}

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

export const fetchCountries = async ()=>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
        return countries.map(country=> country.name)
    }
    catch(error){
    console.log(error.message)
    }
}
