import React from 'react'
import { Card, CardContent, Typography, Grid, CardActionArea } from '@material-ui/core'
import styles from './cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
import { AlertDialog } from '../index'

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate }, country }) => {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState();

    const handleClickOpen = () => {
        if (country === 'India') {
            setOpen(true);
            setData({ confirmed, deaths, recovered })
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (!confirmed) {
        return 'loading....'
    }

    return (
        <div className={styles.container}>
            < Grid container spacing={0} justify="center">
                <Grid item xs={12} md={9}>
                    <Typography variant="body1" align="center" gutterBottom>{new Date().toDateString()}</Typography>
                </Grid>
            </ Grid>
            <Grid container spacing={0} justify="center">
                <Grid item component={Card} xs={5} md={2} className={cx(styles.card, styles.infected)}>
                    <Card onClick={() => handleClickOpen()}>
                        <CardActionArea>
                            <CardContent>
                                <Typography color="textPrimary" gutterBottom>Infected</Typography>
                                <Typography variant="h5">
                                    <CountUp
                                        start={0}
                                        end={confirmed.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item component={Card} xs={5} md={2} className={cx(styles.card, styles.active)}>
                    <Card onClick={() => handleClickOpen()}>
                        <CardActionArea>
                            <CardContent>
                                <Typography color="textPrimary" gutterBottom>Active</Typography>
                                <Typography variant="h5"><CountUp
                                    start={0}
                                    end={confirmed.value - recovered.value}
                                    duration={2.5}
                                    separator=","
                                /></Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item component={Card} xs={5} md={2} className={cx(styles.card, styles.recovered)}>
                    <Card onClick={() => handleClickOpen()}>
                        <CardActionArea>
                            <CardContent>
                                <Typography color="textPrimary" gutterBottom>Recovered</Typography>
                                <Typography variant="h5"><CountUp
                                    start={0}
                                    end={recovered.value}
                                    duration={2.5}
                                    separator=","
                                /></Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item component={Card} xs={5} md={2} className={cx(styles.card, styles.deaths)}>
                    <Card onClick={() => handleClickOpen()}>
                        <CardActionArea>
                            <CardContent>
                                <Typography color="textPrimary" gutterBottom>Deaths</Typography>
                                <Typography variant="h5"><CountUp
                                    start={0}
                                    end={deaths.value}
                                    duration={2.5}
                                    separator=","
                                /></Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            {country === 'India' && open ? <AlertDialog open={open} handleClose={handleClose} data={data} /> : null}
        </div>
    )
}

export default Cards