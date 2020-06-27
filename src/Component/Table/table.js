import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './table.module.css'
import { fetchStateData } from '../../api'
import { useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    tableCell: {
        paddingRight: 4,
        paddingLeft: 5
    }
})

export default function SimpleTable() {
    const classes =  useStyles()
    const [stateData, setStateData] = React.useState([])
    const theme = useTheme()
    console.log(theme)
    React.useEffect(() => {
        (async function () {
            setStateData(await fetchStateData())
        }())
    }, [])

    return (
        <div className={styles.container}>
            <Grid xs={12}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>State</TableCell>
                                <TableCell align="right" className={classes.tableCell}>C</TableCell>
                                <TableCell align="right" className={classes.tableCell}>A</TableCell>
                                <TableCell align="right" className={classes.tableCell}>R</TableCell>
                                <TableCell align="right" className={classes.tableCell}>D</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {stateData.map((data) => (
                                <TableRow key={data.provinceState}>
                                    <TableCell component="th" scope="row">
                                        {data.provinceState}
                                    </TableCell>
                                    <TableCell align="right" style={{ color: "#1875ff" }} className={classes.tableCell}>{data.confirmed}</TableCell>
                                    <TableCell align="right" style={{ color: "#d3a201" }} className={classes.tableCell}>{data.active}</TableCell>
                                    <TableCell align="right" style={{ color: "#00c400" }} className={classes.tableCell}>{data.recovered}</TableCell>
                                    <TableCell align="right" style={{ color: "#bd0000" }} className={classes.tableCell}>{data.deaths}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </div>
    );
}
