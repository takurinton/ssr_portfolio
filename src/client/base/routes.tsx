import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Post } from '../pages/Post';
import { getPost, getPosts } from '../../utils/api/blog/post';

// const Routes = () => (
//     <Router>
//       <Route exact path='/' component={Home}></Route>
//       <Route path='/about' component={About}></Route>
//       <Route path='/post/:id' component={Post}></Route>
//     </Router>
// )

const Routes = async () => {
  const pathList = window.location.pathname.split('/');
  if (pathList[1] == '') {
    await getPosts()
    .then(res => ReactDOM.hydrate(<Home {...res} />, document.getElementById('main')))
    .catch(err => console.error(err))
  }
  else if (pathList[1] == 'about') ReactDOM.hydrate(<About />, document.getElementById('main'));
  else if (pathList[1] == 'post') {
    const id = pathList[2];
    // not foundのバリデーション欲しい
    await getPost(id)
    .then(res => {
      ReactDOM.hydrate(<Post {...res} />, document.getElementById('main'));
    })
    .catch(err => console.error(err))
  }
  else {
    ReactDOM.hydrate(<h1>not found</h1>, document.getElementById('main'));
  }
}

export default Routes;