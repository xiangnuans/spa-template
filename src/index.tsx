import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from '@leke/rc';
import http from '@leke/http';
import reportWebVitals from './reportWebVitals';

configure({ http: http as any });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
