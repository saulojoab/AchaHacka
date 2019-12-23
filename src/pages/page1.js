import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HackathonList from '../components/hackathonList';
import Navbar from '../components/navbar'

const useStyles = makeStyles({
    container: {
        background: '#1C1C1C',
        color: '#6F6F6F'
    }
});

function Page1() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Navbar />
            <HackathonList />
        </div>
    )
}

export default Page1;