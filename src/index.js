import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
//import { Provider } from "react-redux";
//import store from "./components/Store/Store";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      
        <App />
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
