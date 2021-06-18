import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static' >
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            React-Shop
          </Typography>
          <Typography variant='h6' className={classes.root}>
            <a className='gitLink' href="https://github.com/Marat20/React-shop" target='blank' >Git</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
