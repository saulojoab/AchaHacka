import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
      root: {
            flexGrow: 1,
      },
      title: {
            flexGrow: 1,
            alignSelf: 'flex-end',
      },
      appbar: {
            color: 'white',
            background: 'black;'
      }
});

export default function Navbar() {
      const classes = useStyles();

      return (
            <div className={classes.root}>
                  <AppBar position="static" color="primary" className={classes.appbar}>
                        <Toolbar variant="dense">
                              <Typography variant="h6" gutterBottom className={classes.title}>
                                    AchaHacka
                              </Typography>
                              <IconButton style={{ color: 'white' }} onClick={() => window.open('https://github.com/saulojoab/AchaHacka')}>
                                    <GitHubIcon color="white" />
                              </IconButton>
                              <IconButton style={{ color: 'white' }}>
                                    <Brightness2Icon />
                              </IconButton>
                        </Toolbar>
                  </AppBar >
            </div>
      )
}