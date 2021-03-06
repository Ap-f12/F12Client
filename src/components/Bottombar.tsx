import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { WidgetsSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import muiIcon from '../static/mui_icon.png';
import azureIcon from '../static/azure_icon.png';
import firebaseIcon from '../static/firebase_icon.png';
import reactIcon from '../static/react_icon.png';
import React from 'react';

const useStyles = makeStyles(() => ({
  footer: {
    height: '130px',
    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
    
  }
}));

export const Bottombar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(900));

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      className={classes.footer}
    >
      <Grid item>
        <Typography
          variant='overline'
          style={{ lineHeight: '10px', color: '#dfcfcf' }}
        >
          Powered by
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          spacing={3}
        >
          <Grid item>
            <a href='https://v4.mui.com/'>
              <img style={{ height: '24px' }} src={muiIcon} alt='Material Ui' />
            </a>
          </Grid>
          <Grid item>
            <a href='https://azure.microsoft.com/en-us/'>
              <img
                style={{ height: '24px' }}
                src={azureIcon}
                alt='Microsoft Azure'
              />
            </a>
          </Grid>
          <Grid item>
            <a href='https://firebase.google.com/'>
              <img
                style={{ height: '24px' }}
                src={firebaseIcon}
                alt='Google Firebase'
              />
            </a>
          </Grid>
          <Grid item>
            <a href='https://reactjs.org/'>
              <img style={{ height: '24px' }} src={reactIcon} alt='React' />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography
          variant='body2'
          style={{ marginTop: '10px', color: 'white' }}
        >
          Copyright &#169; 2022 f12.website
        </Typography>
      </Grid>
    </Grid>
  );
};
