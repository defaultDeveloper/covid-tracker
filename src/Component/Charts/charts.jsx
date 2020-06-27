import React,{useEffect,useState} from 'react'
import {fetchDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2'
import styles from './charts.module.css'
import 'chartjs-plugin-datalabels'
import { useTheme } from '@material-ui/core/styles'

const Charts = ({data:{confirmed,recovered,deaths},country})=>{
    const [dailyData,setDailyData] = useState([])
    const theme = useTheme()
    useEffect(()=>{
        const fetchApi = async()=>{
        setDailyData(await fetchDailyData())
        }
        fetchApi()
    },[])
    
const barChart=(
    confirmed ?
    (<Bar
        data = {{
            labels:['Infected','Active','Recovered','Deaths'],
            datasets:[{
                label:'People',
                backgroundColor:[
                    'rgba(0, 0, 255, 0.5)',
                    'rgba(255, 196, 0, 0.842)',
                    'rgba(0,255,0, 0.5)',
                    'rgba(255, 0, 0, 0.5)'],
                data:[confirmed.value,confirmed.value-recovered.value,recovered.value,deaths.value]
            }],
            fontColor:theme.palette.type==='light'?'black':'white',
        }}
        options={{
            legend:{display:false},
            title:{display:true, text:`${country}`,fontColor:theme.palette.type==='light'?'black':'white'},
            scales: {
                yAxes: [{
                  display: false
                }],
                xAxes: [{
                    gridLines: {
                        display:false
                    },
                    barPercentage: 0.5
                }]
            },
            //plugins for the values as bar headers
            plugins: {
                datalabels: {
                   display: true,
                   color: theme.palette.type==='light'?'black':'white',
                   anchor:'end',
                   align:'top'
                }
             }
        }}
    />):null
)
const lineChart =(
    dailyData.length
     ?(<Line
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data : dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true
            },{
                data : dailyData.map(({recovered})=>recovered),
                label:'Recovered',
                borderColor:'rgba(0,255,0, 0.5)',
                fill:true
            },{
                data : dailyData.map(({deaths})=>deaths),
                label:'Deaths',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true
         }]
        }}
        options={{
            legend:{display:false},
            title:{display:true, text:`${country}`,fontColor:theme.palette.type==='light'?'black':'white'},
            scales: {
                yAxes: [{
                  display: false
                }],
                xAxes: [{
                    display: false,
                    gridLines: {
                        display:false
                    }
                }]
            },
            //plugins for the values as bar headers
            plugins: {
                datalabels: {
                   display: false,
                }
             }
        }}
        />):null)
    
    //Only show line chart if country selected is global
    return (
        <div className={styles.container}>
            {country!=='global' ? barChart : lineChart}
        </div>
    )
}

export default Charts
