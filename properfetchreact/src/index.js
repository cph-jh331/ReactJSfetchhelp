import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import JokeFacade from './components/JokeFacade';

ReactDOM.render(<App facade={JokeFacade} />, document.getElementById('root'));
registerServiceWorker();
