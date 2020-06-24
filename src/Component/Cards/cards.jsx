import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import styles from './cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({data:{confirmed,deaths,recovered,lastUpdate}},theme)=>{
    if(!confirmed){
        return 'loading....'
    }

    return( 
        <div className={styles.container}>
            <Grid container spacing={0} justify= "center">
                <Grid item component = {Card} xs={12} md={2} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp
                            start = {0}
                            end = {confirmed.value}
                            duration = {2.5}
                            separator=","
                            />
                            </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active COVID-19 cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md={2} className={cx(styles.card,styles.active)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Active</Typography>
                        <Typography variant="h5"><CountUp
                            start = {0}
                            end = {confirmed.value-recovered.value}
                            duration = {2.5}
                            separator=","
                            /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active COVID-19 cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md={2} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><CountUp
                            start = {0}
                            end = {recovered.value}
                            duration = {2.5}
                            separator=","
                            /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoverd COVID-19 cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs={12} md={2} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp
                            start = {0}
                            end = {deaths.value}
                            duration = {2.5}
                            separator=","
                            /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Deaths due to COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards