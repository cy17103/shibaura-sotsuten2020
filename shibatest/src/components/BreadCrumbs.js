import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
      fontFamily:'Yugothic'
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
    current: {
        fontFamily:'Yugothic'
      }
  }));

export default function SimpleBreadcrumbs() {
    const classes = useStyles();

    return (
    <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" color="inherit"  className={classes.link}>
            <HomeIcon className={classes.icon}/>
        </Link>


    <Typography color="textPrimary" className={classes.current}>Current</Typography>
    </Breadcrumbs>
    );
}
