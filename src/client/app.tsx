import * as React from 'react';
import ReactDOM from 'react-dom';
import Routes from './base/routes';

ReactDOM.hydrate(
    <Routes />, 
    document.getElementById('main')
);