import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import {dataClient} from './data-client.js';
import {HookList} from './state/hook-list'

const store = new HookList();

// test the data client:
dataClient.query(`
query {
  hookHandlers {
    id, name
  }
}`).then(response => {
  console.log("Received all handlers: ", response.hookHandlers);
  store.populate(response.hookHandlers);
});



ReactDOM.render(
  <App hookList={store} />,
  document.getElementById("root")
);
