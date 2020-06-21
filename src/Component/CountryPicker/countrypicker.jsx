import React,{useEffect,useState} from 'react'
import styles from './countrypicker.module.css'
import {fetchCountries} from '../../api'
import {NativeSelect,FormControl} from '@material-ui/core'

const Countrypicker = ({handleCountryChange})=>{
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        (async function(){
            setCountries(await fetchCountries())
        }())
    },[setCountries])

    return (
        <FormControl styles={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {countries.map((country,index)=><option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Countrypicker
