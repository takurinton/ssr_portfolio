import express from 'express';
import fetch from 'node-fetch';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import Home from './Home'
import About from './About'
import Post from './Post'

import { PostProps } from './props/post'

const app = express();

app.listen(3000);

const getPost = async () => {
  const res = await fetch('https://api.takurinton.com/blog/v1/post/18')
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

app.get('/post', async (req, res) => {
  const post: PostProps = await getPost();
  const html: string = renderToString(<Post {...post} />)
  await res.send(html)
})