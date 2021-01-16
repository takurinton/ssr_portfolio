import express from 'express';
import fetch from 'node-fetch';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import Home from '../client/pages/Home'
import About from '../client/pages/About'
import Post from '../client/pages/Post'

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
  const html: string = renderToString(<Home />)
  await res.send(html);
});

app.get('/about', async (req, res) => {
  const html: string = renderToString(<About />)
  await res.send(html);
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
  const html: string = renderToString(<Post {...post} />)
  await res.send(html)
})