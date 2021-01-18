import express from 'express';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Home } from '../client/pages/Home'
import { About } from '../client/pages/About'
import { Post } from '../client/pages/Post'

import Html from '../client/base/Html'

import { getPosts, getPost } from '../utils/api/blog/post'

import { PostProps } from '../props/post'

const app = express();

app.use(express.static('dist'));

app.listen(3000);

app.get('/', (req, res) => {
  const renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: 'たくりんとん | home',
        slug: `http://localhost:3000/`,
        children: Home,
        discription: undefined, 
        image: undefined, 
        props: {},
      })
    )
  );

  res.send(renderd);
});

app.get('/about', (req, res) => {
  const renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: 'たくりんとん | about',
        slug: `http://localhost:3000/`,
        children: About,
        discription: undefined, 
        image: undefined, 
        props: {},
      })
    )
  );

  res.send(renderd);
});

// const Posts: React.FC<any> = (props) => <h1>{ props }</h1>

// app.get('/post', async (req, res) => {
//   const posts = await getPosts()
//   const html: string = renderToString(<Posts {...posts} />)
//   await res.send(html)
// })

app.get('/post/:id', async (req, res) => {
  const id = req.params.id;
  const post: PostProps = await getPost(id);
  const renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: 'たくりんとん | home',
        slug: `http://localhost:3000/`,
        children: Post,
        discription: undefined, 
        image: undefined, 
        props: post,
      })
    )
  );

  res.send(renderd);
})