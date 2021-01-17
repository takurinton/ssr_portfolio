import express from 'express';
import fetch from 'node-fetch';
import * as React from 'react';
import { hydrate } from 'react-dom/server';
import { renderToStaticMarkup } from 'react-dom/server';

import Home from '../client/pages/Home'
import About from '../client/pages/About'
import Post from '../client/pages/Post'

import Html from '../client/base/Html'

import { PostProps } from '../props/post'

const app = express();

app.listen(3000);

const getPosts = async () => {
  const res = await fetch(`https://api.takurinton.com/blog/v1/`)
  return await res.json()
}

const getPost = async (id: string) => {
  const res = await fetch(`https://api.takurinton.com/blog/v1/post/${id}/`)
  return await res.json()
}

app.get('/', async (req, res) => {
  const renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: 'たくりんとん | home',
        slug: `http://localhost:3000/`,
        children: Home,
        props: '',
      })
    )
  );

  await res.send(renderd);
});

app.get('/about', async (req, res) => {
  const renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: 'たくりんとん | about',
        slug: `http://localhost:3000/`,
        children: About,
        props: '',
      })
    )
  );

  await res.send(renderd);
});

// const Posts: React.FC<any> = (props) => <h1>{ props }</h1>

// app.get('/post', async (req, res) => {
//   const posts = await getPosts()
//   const html: string = renderToString(<Posts {...posts} />)
//   await res.send(html)
// })

app.get('/post/:id', async (req, res) => {
  const id = req.params.id
  const post: PostProps = await getPost(id);
  const renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: 'たくりんとん | home',
        slug: `http://localhost:3000/`,
        children: Post,
        props: post,
      })
    )
  );

  await res.send(renderd)
})