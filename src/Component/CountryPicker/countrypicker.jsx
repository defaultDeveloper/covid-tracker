import React,{useEffect,useState} from 'react'
import styles from './countrypicker.module.css'
import {fetchCountries} from '../../api'
import {NativeSelect,FormControl} from '@material-ui/core'

const Countrypicker = ({handleCountryChange})=>{
    const [countries,setCountries]=useState([])
    const [defaultCountry,setDefaultCountry]=useState('India')
    
    useEffect(()=>{
        (async function(){
            setCountries(await fetchCountries())
        }())
    },[])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect value={defaultCountry} onChange={(e)=>{handleCountryChange(e.target.value)
            setDefaultCountry(e.target.value)}}> 
            {/* used the setState method here to persist the new selection  */}
                <option value="global">Global</option>
                {countries.map((country,index)=><option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Countrypicker
