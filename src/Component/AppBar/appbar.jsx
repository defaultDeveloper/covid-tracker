import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './appbar.module.css'
import IconButton from '@material-ui/core/IconButton';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import { useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    grid: {
        padding:0,
        margin:0,
    },
    title: {
        flexGrow: 1,
    },

}));

export default function ButtonAppBar({ toggleDarkTheme }) {
    const classes = useStyles();
    const theme = useTheme()

    return (
        <div className={styles.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    < Grid container spacing={0} justify="center">
                        <Grid item xs={5} md={9}>
                            <Typography variant="h6" align="left" className={classes.title}>
                                COVID-19
                    </Typography>
                        </Grid>
                        <Grid item xs={7} md={9}>
                            <Typography variant="h6" align="left" className={classes.title}>{new Date().toDateString().split(' ').slice(0, 3).join(' ')}</Typography>
                        </Grid>
                    </ Grid>
                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => toggleDarkTheme()}>
                        {theme.palette.type === 'light' ? <Brightness2Icon /> : <Brightness5Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}