import React from 'react';
import styles from './navigation.module.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LanguageIcon from '@material-ui/icons/Language';
import InfoIcon from '@material-ui/icons/Info';
import { useHistory } from 'react-router-dom'

export default function LabelBottomNavigation() {

    const [value, setValue] = React.useState('count');
    let history = useHistory()
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    return (
        <div>
            <div className={styles.phantom} />
            <div className={styles.footer}>
                <BottomNavigation value={value} onChange={handleChange} className={styles.root}>
                    <BottomNavigationAction label="Count" value="count" onClick={() => history.push('/covid-tracker')} icon={<LanguageIcon />} />
                    <BottomNavigationAction label="News" value="news" onClick={() => history.push('/news')} icon={<InfoIcon />} />
                </BottomNavigation>
            </div>
        </div>
    );
}