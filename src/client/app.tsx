import * as React from 'react';
import { hydrate } from 'react-dom/server';
import Home from './pages/Home';

const render = () => {
    fetch('/post/18')
    .then(res => {
        console.log(res);
        hydrate(<Home />, document.getElementById('main'))
    })
    .catch(err => { throw new Error('err') })
}

render();