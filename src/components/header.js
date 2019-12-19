import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    left: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'right',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: 'white'
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'right',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container: {
        background: '#000000',
        padding: 8
    },
});

export default function Header (){
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid xs={6} item className={classes.left}>
                <Typography variant="body1" gutterBottom>
                    LOGO
                </Typography>
            </Grid>
            <Grid xs={6} item className={classes.right}>
                <Button color="primary" style={{color: 'white'}} onClick={() => window.open('https://github.com/saulojoab/AchaHacka')}>
                    <GitHubIcon color="white"/>       
                </Button>
                <Button style={{color: 'white'}} style={{color: 'white'}}>
                    <Brightness2Icon/>
                </Button>
            </Grid>
        </Grid>
    )
}