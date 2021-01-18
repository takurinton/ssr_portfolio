import * as React from 'react';
import fetch from 'node-fetch';
import { hydrate } from 'react-dom/server';
import Home from './pages/Home';

const render = () => {
    fetch('/')
    .then(res => {
        console.log(res);
        hydrate(<Home />, document.getElementById('main'))
    })
    .catch(err => { throw new Error('err') })
}

console.log('takurinton');
render();