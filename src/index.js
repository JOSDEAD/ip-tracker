import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './state/store'
import { createGlobalStyle } from 'styled-components';

const StyledFontContainer = createGlobalStyle`
  body {
    font-family: Rubik;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <StyledFontContainer/>
    <App />
  </Provider>,
  document.getElementById('root')
);
