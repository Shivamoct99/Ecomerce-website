import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context/Productcontext";
import { FilterContextProvider } from "./context/Filtercontext";
import { CartContextProvider } from "./context/Cartcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <FilterContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </FilterContextProvider>
      </AppProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
