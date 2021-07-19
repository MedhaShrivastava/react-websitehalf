import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const appID = new AppID();
await appID.init({
 clientId: '<c5f19698-a4e4-4e98-97c7-7fc96b0c95a3>',
 discoveryEndpoint: '<https://eu-gb.appid.cloud.ibm.com/oauth/v4/5c0dc695-4ee3-45e4-9139-14874b29b5d5/.well-known/openid-configuration>'
});

