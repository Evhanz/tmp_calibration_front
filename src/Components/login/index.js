import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Background from '../../assets/images/TPS_mobile_verde.png';
import BackgroundLarge from '../../assets/images/TPS_desktop_verde.png';
import { makeStyles } from '@material-ui/core/styles';
import LogoMs4m  from '../../assets/icons/logo.svg';
import {CardLogin} from './card_login'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundColor:`#005A64`,
      [theme.breakpoints.down('xs')]: {
        backgroundImage: `url(${Background})`,
        minHeight: `640px`,
      },
      [theme.breakpoints.up('sm')]: {
        backgroundImage: `url(${BackgroundLarge})`,
        minHeight: `820px`,
      }
    },
    imgContainer:{
        marginTop:`60px`,
        marginBottom:`10px`
    },
    contenContainer:{
      display:`flex`,
      flexDirection:`column`,
      justifyContent:`center`,
      alignItems:`center`,
      [theme.breakpoints.down('xs')]: {
      }

    }
  }));


export const Login = () => {

  /*
  useEffect(() => {
    // Update the document title using the browser API
    localStorage.removeItem('_token');
  },[]);
  */
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <div className={classes.contenContainer}>
          <div className={classes.imgContainer} >
            <img style={{width:"159.43px"}} src={LogoMs4m} alt="Logo" />
          </div>
          <div >
            <CardLogin/>
          </div>
        </div>
        
        
    </div>
  )
}
