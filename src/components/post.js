import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		backgroundColor: "red",
	},
});

export default function Post(){
	const classes = useStyles();

	return(
		<Container>
			<Card className={classes.card}>
				<CardContent>
					<Typography variant="h5" component="h2">
						Post Hack
					</Typography>
				</CardContent>
			</Card>
		</Container>
	)
}

