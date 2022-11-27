import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react'


function App({ signOut , user }) {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <p>{user.attributes.email}</p>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App,{
  socialProviders : ['google','facebook']
});