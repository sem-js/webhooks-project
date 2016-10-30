import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import appState from './state/app-state';
import {fetchHooks} from './actions/hook-actions';

fetchHooks();

ReactDOM.render(
  <App store={appState} />,
  document.getElementById("root")
);
