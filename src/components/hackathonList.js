import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Post from './post';

const useStyles = makeStyles({
    title: {
        fontWeight: 'lighter',
        margin: 20
    },
    lastCard: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        height: '100%',
        width: '100%',
        color: '#E4E4E4'
    }
});

export default function HackathonList(){
    const classes = useStyles();

    return (
        <Grid container>
            <Grid xs={12} item>
                <Typography className={classes.title} variant="h4">
                    Hackathons Cadastrados
                </Typography>
            </Grid>
            <Grid container>
                <Post 
                    title={"Hackathon Title"} 
                    city="Crato" 
                    state="Ceará" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nulla a justo viverra dictum. Ut ut pellentesque ante, vitae placerat urna. Cras fermentum magna vel efficitur vestibulum. Sed pellentesque pretium dui, ut finibus arcu faucibus id. Quisque a nunc turpis. Aenean malesuada rutrum arcu at rutrum. In aliquet pellentesque luctus. Praesent sed felis a dolor cursus cursus eu a sem."
                />
                <Post 
                    title={"Hackathon Title"} 
                    city="Crato" 
                    state="Ceará" 
                    description="O hackathon mais daora da cidade, muito fodaaa..."
                />
                <Post 
                    title={"Hackathon Title"} 
                    city="Crato" 
                    state="Ceará" 
                    description="O hackathon mais daora da cidade, muito fodaaa..."
                />
                <Grid xs={12} sm={6} lg={3} item>
                    <Button className={classes.lastCard}>
                        <Typography variant="h5">
                            Ver mais Hackathons<br/>...
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

