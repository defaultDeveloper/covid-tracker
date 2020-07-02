import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './table.module.css'
import { fetchStateData } from '../../api'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import TableSortLabel from '@material-ui/core/TableSortLabel';

//Added padding t accomodate the table in  mobile views
const useStyles = makeStyles({
    tableCell: {
        paddingRight: 4,
        paddingLeft: 5
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
      },
})

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: "state", numeric: false, disablePadding: true, label: 'State' },
    { id: "confirmed", numeric: true, disablePadding: false, label: 'C' },
    { id: "active", numeric: true, disablePadding: false, label: 'A' },
    { id: "recovered", numeric: true, disablePadding: false, label: 'R' },
    { id: "deaths", numeric: true, disablePadding: false, label: 'D' },
];

function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        className={classes.tableCell}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};


export default function SimpleTable() {
    const classes = useStyles()
    const [stateData, setStateData] = React.useState([])
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('confirmed');


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    React.useEffect(() => {
        (async function () {
            setStateData(await fetchStateData())
        }())
    }, [])

    return (
        <div className={styles.container}>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" size="small">
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {stableSort(stateData, getComparator(order, orderBy)).map((data) => {
                                return(
                                <TableRow key={data.provinceState}>
                                    <TableCell align="LEFT" className={classes.tableCell}>
                                        {data.provinceState}
                                    </TableCell>
                                    <TableCell align="right" style={{ color: "#1875ff" }} className={classes.tableCell}>{data.confirmed}</TableCell>
                                    <TableCell align="right" style={{ color: "#d3a201" }} className={classes.tableCell}>{data.active}</TableCell>
                                    <TableCell align="right" style={{ color: "#00c400" }} className={classes.tableCell}>{data.recovered}</TableCell>
                                    <TableCell align="right" style={{ color: "#bd0000" }} className={classes.tableCell}>{data.deaths}</TableCell>
                                </TableRow>
                            )})}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </div>
    );
}
