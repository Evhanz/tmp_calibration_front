import React from 'react';
import './App.css';
import { Login } from './Components/login'
import { render } from "react-dom"
import { Router, Link, Redirect } from "@reach/router"
import {validateLogin} from "@/Services/validateLogin.js"
import {LogOut} from './Components/login/log_out'
import {Layout} from './Components/layout'
import {Configuration} from './Components/configuration/init'

let Noni = () => <div>Noni</div>
let Dash = () =><div>Home
<Link to="/dash/demo">Invoice 123</Link>


</div>

function App() {
  const validLogin = validateLogin();

  return (
    <Router>
      <Login path="/" />
      <LogOut path="/logOut" /> 
      <Layout path="dash" >
        <Dash path="/"/>
        <Noni path="demo"/>
        <Configuration path="configuration" />
      </Layout>
    </Router>    
  );
}



export default App;
