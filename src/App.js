import './App.css';
import { Authenticator } from '@aws-amplify/ui-react'

import {
  CocheCreateForm 
 } from './ui-components';
 import {
  NavBarHeader 
 } from './ui-components';
import { Fragment } from 'react';
 
function App({ signOut, user }) {
  return (
    <Fragment>
      
        <img src='./logo_a_factory.png' alt='logo' style={{ margin: 'auto',textAlign: 'center',display:'flex' }}></img>
    <Authenticator hideSignUp>
        <NavBarHeader />
        <CocheCreateForm/>
    </Authenticator>
    </Fragment>


  );
}

export default App;
