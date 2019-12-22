import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, CardContent, Typography, Button} from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		backgroundColor: "#393939",
		color: '#E4E4E4',
		margin: 10
	},
});

export default function Post(props){
	const classes = useStyles();

	return(
		<Grid item xs={12} sm={6} lg={3}>
			<Card className={classes.card}>
				<CardContent>
					<Typography variant="h5">
						{props.title}
					</Typography>
					<Typography variant='h7' style={{display: 'flex', alignItems: 'center', fontWeight: 'lighter'}}>
						<RoomIcon/> {props.city} - {props.state}
					</Typography>
					<br/>
					<Typography variant='body1' style={{color: 'white', textAlign: 'justify'}}>
						{props.description.slice(0,90) + '...'}
					</Typography>
					<br/>
					<Button color="inherit" variant="outlined" style={{width: '100%', color: 'grey'}}>
						Dar uma olhada
					</Button>
				</CardContent>
			</Card>
		</Grid>
	)
}

