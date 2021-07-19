
import React from 'react';
import './App.css';
import logo from './logo.svg';
import AppID from 'ibmcloud-appid-js';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About  from './components/About';
import Products from './components/pages/Products';

function App() {
  const appID = React.useMemo(() => {
    return new AppID()
  }, []);

  const [errorState, setErrorState] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  (async () => {
    try {
      await appID.init({
        clientId: '<SPA_CLIENT_ID>',
        discoveryEndpoint: '<WELL_KNOWN_ENDPOINT>'
      });
    } catch (e) {
      setErrorState(true);
      setErrorMessage(e.message);
    }
  })();

  const [welcomeDisplayState, setWelcomeDisplayState] = React.useState(false);
  const [loginButtonDisplayState, setLoginButtonDisplayState] = React.useState(true);
  const [userName, setUserName] = React.useState('');

  const loginAction = async () => {
    try {
      const tokens = await appID.signin();
      setErrorState(false);
      setLoginButtonDisplayState(false);
      setWelcomeDisplayState(true);
      setUserName(tokens.idTokenPayload.name);
    } catch (e) {
      setErrorState(true);
      setErrorMessage(e.message);
    }
  };


  return (

<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {welcomeDisplayState && <div> Welcome {userName}! You are now authenticated.</div>}
        {loginButtonDisplayState &&
        <button
            style={{fontSize: '24px', backgroundColor: 'skyblue', border: 'none'}}
            id='login'
            onClick={loginAction}>Login
        </button>
        }
        {errorState && <div style={{color: 'red'}}>{errorMessage}</div>}
      </header>
    </div>
 
      }

    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;