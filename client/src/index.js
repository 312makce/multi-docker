import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerserviceworker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
