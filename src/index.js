import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context/Productcontext";
import { FilterContextProvider } from "./context/Filtercontext";
import { CartContextProvider } from "./context/Cartcontext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;
root.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        // domain="shivam8273146313.us.auth0.com"
        // clientId="TnvHUjAQ3yzQLztjhLJUhzfDMqdu2VoQ"
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <AppProvider>
          <FilterContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </FilterContextProvider>
        </AppProvider>
      </Auth0Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
