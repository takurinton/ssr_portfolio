import * as React from 'react';
import fetch from 'node-fetch';
import ReactDOM from 'react-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Post } from '../pages/Post';
import { Me } from '../pages/Me';
import { Contact } from '../pages/Contact';
import { Memo } from '../pages/Memo';

import { PostsProps, PostProps } from '../../types/types';

// TODO: prefetchも追加する

const Routes = async () => {
  // 今path多くないからこれでいい
  // const pathList = window.location.pathname.split('/');
  const path = window.location.pathname.split('/')[1];
  const json = JSON.parse(document.getElementById('json').getAttribute('data-json'));

  switch (path) {
    case '':
      ReactDOM.hydrate(
        <Home {...json} />, document.getElementById('main')
      );
      break;
      
    case 'about':
      ReactDOM.hydrate(
        <About />, document.getElementById('main')
      );
      break;
      
    case 'me':
      ReactDOM.hydrate(
        <Me />, document.getElementById('main')
      );
      break;

    case 'post':
      ReactDOM.hydrate(
        <Post {...json} />, document.getElementById('main')
      );
      break;
    
    case 'contact':
    ReactDOM.hydrate(
      <Contact />, document.getElementById('main')
    );
    break;

    case 'memo':
      ReactDOM.hydrate(
        <Memo />, document.getElementById('main')
      );
      break;

    default: 
      ReactDOM.hydrate(
        <h1>page is not found</h1>, 
        document.getElementById('main')
      );
  }
};

export default Routes;