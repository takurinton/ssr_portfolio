import * as React from 'react';
// import fetch from 'node-fetch';
import { hydrate } from 'react-dom/server';
import Home from './pages/Home';

hydrate(<Home />, document.getElementById('main'));