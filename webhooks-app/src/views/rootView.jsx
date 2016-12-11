import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import appState from '../state/app-state';

export default function () {
  ReactDOM.render(
    <App store={appState}/>,
    document.getElementById('root')
  );
};
