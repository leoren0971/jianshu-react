import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';

const AppRoot = (
  <Fragment>
    <GlobalStyle/>
    <App/>
  </Fragment>
)
ReactDOM.render(AppRoot, document.getElementById('root'));
