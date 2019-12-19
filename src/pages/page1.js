import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Post from '../components/post'
import Header from '../components/header';

const useStyles = makeStyles({});

function Page1(){
    const classes = useStyles();

    return (
        <div>
            <Header/>
            <h1>OK PAGE 1</h1>
            <Post/>
        </div>
    )
}

export default Page1;