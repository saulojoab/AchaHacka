import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Header from '../components/header';
import HackathonList from '../components/hackathonList';

const useStyles = makeStyles({
    container: {
        background: '#1C1C1C',
        color: '#6F6F6F'
    }
});

function Page1(){
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Header/>
            <HackathonList/>
        </div>
    )
}

export default Page1;