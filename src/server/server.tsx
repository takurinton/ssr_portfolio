import express from 'express';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Home } from '../client/pages/Home';
import { About } from '../client/pages/About';
import { Post } from '../client/pages/Post';
import { Me } from '../client/pages/Me';
import { Contact } from '../client/pages/Contact';

import Html from '../client/base/Html';

import { getPosts, getPost } from '../utils/_api/blog/post';

import { PostProps } from '../types/types';

import { getParams } from '../utils/getParams';

import { syntaxHighlight } from '../styles/markdown/syntaxHighlight';
import marked from 'marked';
import { Memo } from '../client/pages/Memo';
const { markdownStyle } = require('../styles/markdown/dairyreport');

const app = express();

app.use(express.static('dist'));
app.listen(3000);


app.get('/', async (req, res) => {
  const page: string = req.query.page === undefined ? '' : req.query.page;
  const category: string = req.query.category === undefined ? '' : encodeURI(req.query.category);
  const qs: string = getParams(page, category);
  const posts = await getPosts(qs);
  const _renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: 'たくりんとん',
        slug: `http://localhost:3000/`,
        children: Home,
        discription: undefined, 
        image: undefined, 
        props: posts,
      })
    )
  );
  res.setHeader('Content-Type', 'text/html')
  const renderd = '<!DOCTYPE html>' + _renderd;
  res.send(renderd);
});

app.get('/about', (req, res) => {
  const _renderd = renderToStaticMarkup(
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
  res.setHeader('Content-Type', 'text/html')
  const renderd = '<!DOCTYPE html>' + _renderd;
  res.send(renderd);
});

app.get('/post/:id', async (req, res) => {
  const id = req.params.id;
  const post: PostProps = await getPost(id);

  syntaxHighlight() 
  const r: marked.Renderer = markdownStyle()
  const md: string = marked(post.contents, {renderer: r})
  const pubDate = post.pub_date.substring(0, 10)

  const props: PostProps = {
    id: post.id,
    title: post.title, 
    category: post.category,
    contents: md, 
    contents_image_url: post.contents_image_url,
    pub_date: pubDate,
    comment: post.comment
  }

  const _renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: `${post.title} | たくりんとんのブログ`,
        slug: `http://localhost:3000/`,
        children: Post,
        discription: `${post.title} | たくりんとんのブログ`, 
        image: `https://takurinton.com${post.contents_image_url}`,
        props: props,
      })
    )
  );
  res.setHeader('Content-Type', 'text/html')
  const renderd = '<!DOCTYPE html>' + _renderd;
  res.send(renderd);
})

app.get('/me', async (req, res) => {
  const lang = req.query.lang === 'en' ? 'en' : 'ja';
  const _renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: `たくりんとん | me`,
        slug: `http://localhost:3000/`,
        children: Me,
        discription: `たくりんとん | me`, 
        image: undefined,
        props: {lang: lang},
      })
    )
  );
  res.setHeader('Content-Type', 'text/html')
  const renderd = '<!DOCTYPE html>' + _renderd;
  res.send(renderd);
})

app.get('/memo', (req, res) => {
  const _renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: 'たくりんとん | memo',
        slug: `http://localhost:3000/`,
        children: Memo,
        discription: 'たくりんとん | memo', 
        image: undefined, 
        props: {},
      })
    )
  );
  res.setHeader('Content-Type', 'text/html')
  const renderd = '<!DOCTYPE html>' + _renderd;
  res.send(renderd);
});

app.get('/contact', (req, res) => {
  const _renderd = renderToStaticMarkup(
    React.createElement(
      Html({
        title: 'たくりんとん | contact',
        slug: `http://localhost:3000/`,
        children: Contact,
        discription: 'たくりんとん | contact', 
        image: undefined, 
        props: {},
      })
    )
  );
  res.setHeader('Content-Type', 'text/html')
  const renderd = '<!DOCTYPE html>' + _renderd;
  res.send(renderd);
});

app.get('/post/fetch/:id', async (req, res) => {
  const id = req.params.id;
  const post: PostProps = await getPost(id);
  res.send(post);
})