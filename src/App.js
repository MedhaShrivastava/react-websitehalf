
import React from 'react';
import './App.css';
import AppID from 'ibmcloud-appid-js';


function App() {
  const appID = React.useMemo(() => {
    return new AppID()
  }, []);

  const [errorState, setErrorState] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  (async () => {
    try {
      await appID.init({
        clientId:'< >',
        discoveryEndpoint: '<https://eu-gb.appid.cloud.ibm.com/oauth/v4/5c0dc695-4ee3-45e4-9139-14874b29b5d5/.well-known/openid-configuration>'
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
        <img src="" className="App-logo" alt="logo" />
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
 
  ) ;
      }


export default App;