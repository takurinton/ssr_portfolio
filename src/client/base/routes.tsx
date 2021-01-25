import * as React from 'react';
import fetch from 'node-fetch';
import ReactDOM from 'react-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Post } from '../pages/Post';
import { Me } from '../pages/Me';
import { Contact } from '../pages/Contact';
import { Memo } from '../pages/Memo';

import { PostsProps } from '../../types/types';

// TODO: prefetchも追加する

const Routes = async () => {
  const pathList = window.location.pathname.split('/');
  const params = window.location.search;
  if (pathList[1] == '') {
    const json: PostsProps = JSON.parse(document.getElementById('json').getAttribute('data-json'));
    ReactDOM.hydrate(
      <Home {...json} />, document.getElementById('main')
    )
  }
  else if (pathList[1] == 'about') {
    ReactDOM.hydrate(
      <About />, document.getElementById('main')
    );
  }
  else if (pathList[1] == 'me') {
    ReactDOM.hydrate(
      <Me />, document.getElementById('main')
    );
  }
  else if (pathList[1] == 'post') {
    const id = pathList[2];
    const json: PostsProps = JSON.parse(document.getElementById('json').getAttribute('data-json'));
    ReactDOM.hydrate(
      <Post {...json} />, document.getElementById('main')
    );
  }
  else if (pathList[1] == 'contact') {
    ReactDOM.hydrate(
      <Contact />, document.getElementById('main')
    );
  }
  else if (pathList[1] == 'memo') {
    ReactDOM.hydrate(
      <Memo />, document.getElementById('main')
    );
  }
  else {
    ReactDOM.hydrate(
      <h1>not found</h1>, 
      document.getElementById('main')
    );
  }
}

export default Routes;