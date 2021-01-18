import * as React from 'react';
import fetch from 'node-fetch';
import { hydrate } from 'react-dom/server';
import Home from './pages/Home';

const render = () => {
    fetch('/post/18')
    .then(res => console.log(res))
    .catch(err => { throw new Error('err') })
}

render();