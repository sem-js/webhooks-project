import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import {dataClient} from './data-client.js';

// test the data client:

dataClient.query(`
query {
  hookHandlers {
    id, name
  }
}`).then(response => {
  console.log("Received all handlers: ", response.hookHandlers);
});

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
