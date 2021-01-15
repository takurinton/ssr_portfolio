import express from 'express';
import fetch from 'node-fetch';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from './Home'
import About from './About'

const app = express();

app.listen(3000);

const getPost = async () => {
  const res = await fetch('https://api.takurinton.com/blog/v1/')
  return await res.json()
}

app.get('/', async (req, res) => {
  // const posts = await getPost();
  // const html = JSON.stringify(posts)
  const html = renderToString(<Home />)
  await res.send(html);
});

app.get('/about', async (req, res) => {
  // const posts = await getPost();
  // const html = JSON.stringify(posts)
  const html = renderToString(<About />)
  await res.send(html);
});