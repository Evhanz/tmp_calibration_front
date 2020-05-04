import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import ImgLoginUser  from '../../../assets/icons/login_user.svg';
import ImgLogpass  from '../../../assets/icons/login_pass.svg';
import Checkbox from '@material-ui/core/Checkbox';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import { Router, Link, Redirect, navigate } from "@reach/router"
import {signIn} from "@/Services/validateLogin"



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: `#005a6499`,
    minWidth: `332px`
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  inputContainer:{
    backgroundColor:`#ffffff`,
    borderRadius:`2%`,
    padding: `10px`,
    display: `flex`,
    marginBottom:`19px`,
    [theme.breakpoints.down('sm')]: {
      minWidth: `230px`
    }

  },
  imgUser:{
      height:`20px`
  },
  cardContent:{
    padding:`50px 50px 15px 50px`
  }
}));

export const CardLogin =  () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    user: '',
    password: '',
    errorPass: false,
    errorUser: false,
    showPassword: false,
    messageError:'',
    redirect: false
  });
  const [checked, setChecked] = React.useState(true);

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const resetMessageLogin =()=>{
    setValues({ ...values, messageError: ""});
    
  }

  const renderRedirect = () => {
    if (values.redirect) {
      return <Redirect from='/' to='/dash' noThrow/>
     // navigate("/dash")
    }
  }

  const handleLogin = async (event) => {
    resetMessageLogin();
    let fail = false;
    let errorUser = false;
    let errorPass = false;


    if(values.user.length < 1 ){
      fail = true;
      errorUser = true;
    }  
    if (values.password.length <  1){
      fail = true;
      errorPass = true
    }

    if(fail){
      setValues({ ...values, messageError: "Complete los campos de usuario y contraseña", errorUser: errorUser , errorPass: errorPass});
    } else {

      const userLog = await signIn(values.user, values.password);
      if(userLog.accessToken == null){
        setValues({ ...values, messageError: "Los campos de usuario y contraseña son erroneos"});
      } else {

        localStorage.setItem("_token", userLog.accessToken);
        localStorage.setItem("username", values.user);  

        setValues({ ...values, messageError: "", redirect:true});
      }
    }


  };


  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
          <div className={classes.inputContainer}>
              <div style={{marginRight:`10px`}}>
                <img style={{height:"20px"}} src={ImgLoginUser} alt="Logo" />
              </div>
              <div>
                  <span style={{color:`#005A64`, fontSize: `13.5px`}}>User</span><br></br>
                  <TextField error={values.errorUser} 
                  onChange={handleChange('user')} id="user"  defaultValue="" placeholder="pg: lvillar" />
              </div>
          </div>

          <div className={classes.inputContainer}>
              <div style={{marginRight:`10px`}}>
                <img style={{height:"20px"}} src={ImgLogpass} alt="Logo" />
              </div>
              <div>
                  <span style={{color:`#005A64`,  fontSize: `13.5px`}}>Pasword {values.errorPass}</span><br></br>
                  <Input 
                    error={values.errorPass}
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')} id="pass"  placeholder="********" />
 
              </div>
              <div style={{marginRight:`10px`, position:`relative`}}>
              <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
          </div>
          {
            values.messageError.length >0 ?
            <div style={{textAlign:`center`, marginBottom:`20px`}}>
              <span style={{color:`#FF3A3A` , fontSize: `10.3px`}} >{values.messageError}</span>
            </div> : ''
          }
         
          <div style={{ marginBottom:`20px`}}>
            <Button variant="contained" color="primary" style={{width:`100%`}} onClick={handleLogin}>
              Log in
            </Button>
          </div>
          <div style={{ marginBottom:`20px`}}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <span style={{fontSize:`10.13px`, color:`white`}}>Remember me</span>
          </div>
          <div style={{fontSize:`10.13px`, color:`white`, textAlign:`center`}}>
            <span>In case you cannot enter,</span> <br></br>
            <span>contact the <u>Administrator</u></span>
          </div>
          {renderRedirect()}

      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}