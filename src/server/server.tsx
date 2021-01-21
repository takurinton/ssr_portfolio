import express from 'express';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
const sassMiddleware = require('node-sass-middleware');
const path = require('path');

import { Home } from '../client/pages/Home';
import { About } from '../client/pages/About';
import { Post } from '../client/pages/Post';

import Html from '../client/base/Html';

import { getPosts, getPost } from '../utils/api/blog/post';

import { PostProps } from '../types/types';

import { getParams } from '../utils/getParams';

const app = express();

app.use(express.static('dist'));
app.listen(3000);


app.get('/', async (req, res) => {
  const page: string = req.query.page === undefined ? '' : req.query.page;
  const category: string = req.query.category === undefined ? '' : encodeURI(req.query.category);
  const qs: string = getParams(page, category);
  const posts = await getPosts(qs);
  const renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: 'たくりんとん | home',
        slug: `http://localhost:3000/`,
        children: Home,
        discription: undefined, 
        image: undefined, 
        props: posts,
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

app.get('/post/:id', async (req, res) => {
  const id = req.params.id;
  const post: PostProps = await getPost(id);
  const renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: `${post.title} | たくりんとんのブログ`,
        slug: `http://localhost:3000/`,
        children: Post,
        discription: `${post.title} | たくりんとんのブログ`, 
        image: `https://takurinton.com${post.contents_image_url}`,
        props: post,
      })
    )
  );

  res.send(renderd);
})

app.get('/post/fetch/:id', async (req, res) => {
  const id = req.params.id;
  const post: PostProps = await getPost(id);
  res.send(post);
})