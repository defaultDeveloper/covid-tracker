import React from 'react';
import styles from './navigation.module.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LanguageIcon from '@material-ui/icons/Language';
import InfoIcon from '@material-ui/icons/Info';
import { useHistory } from 'react-router-dom'

export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState(!window.location.hash.substr(2)?'count':'news');
    let history = useHistory()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    //phantom and footer div for a floating style navbar.
    //history.push is used with browserHistory or hashHistory and is navigted to that route.
    return (
        <div>
            <div className={styles.phantom} />
            <div className={styles.footer}>
                <BottomNavigation value={value} onChange={handleChange} showLabels className={styles.root}>
                    <BottomNavigationAction label="Count" value="count" onClick={() => history.push('/')} icon={<LanguageIcon />} />
                    <BottomNavigationAction label="News" value="news" onClick={() => history.push('/news')} icon={<InfoIcon />} />
                </BottomNavigation>
            </div>
        </div>
    );
}