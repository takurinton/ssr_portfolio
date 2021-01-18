import * as React from 'react';
import { hydrate } from 'react-dom/server';
import Routes from './base/routes';

hydrate(
    <Routes />,
    document.getElementById('main')
);