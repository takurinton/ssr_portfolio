import * as React from 'react';
import ReactDOM from 'react-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Post } from '../pages/Post';
import { Me } from '../pages/Me';
import { getPost, getPosts } from '../../utils/_api/blog/post';

const Routes = async () => {
  const pathList = window.location.pathname.split('/');
  const params = window.location.search;
  if (pathList[1] == '') {
    await getPosts(params)
    .then(res => 
      ReactDOM.hydrate(
        <Home {...res} />, document.getElementById('main')
      )
    )
    .catch(err => console.error(err))
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
    // not foundのバリデーション欲しい
    await getPost(id)
    .then(res => {
      ReactDOM.hydrate(
        <Post {...res} />, document.getElementById('main')
      );
    })
    .catch(err => console.error(err))
  }
  else {
    ReactDOM.hydrate(
      <h1>not found</h1>, 
      document.getElementById('main')
    );
  }
}

export default Routes;