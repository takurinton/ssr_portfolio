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

app.use(express.static('api'));
app.listen(3000);


app.get('/', (req, res) => {
  const page: string = req.query.page === undefined ? '' : req.query.page;
  const category: string = req.query.category === undefined ? '' : encodeURI(req.query.category);
  const qs: string = getParams(page, category);
  getPosts(qs)
  .then(res => res.json())
  .then(json => {
    const _renderd = renderToStaticMarkup(
      React.createElement(
        Html({
          title: 'たくりんとん',
          slug: `http://localhost:3000/`,
          children: Home,
          discription: undefined, 
          image: undefined, 
          props: json,
        })
      )
    );
    res.setHeader('Content-Type', 'text/html')
    const renderd = '<!DOCTYPE html>' + _renderd;
    res.send(renderd);
  })
  .catch(err => { throw new Error(err) })
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

app.get('/post/:id', (req, res) => {
  const id = req.params.id;
  getPost(id)
  .then(res => res.json())
  .then(json => {
    syntaxHighlight() 
    const r: marked.Renderer = markdownStyle()
    const md: string = marked(json.contents, {renderer: r})
    const pubDate = json.pub_date.substring(0, 10)
  
    const props: PostProps = {
      id: json.id,
      title: json.title, 
      category: json.category,
      contents: md, 
      contents_image_url: json.contents_image_url,
      pub_date: pubDate,
      comment: json.comment
    }
  
    const _renderd = renderToStaticMarkup(
      React.createElement(
        Html({
          title: `${json.title} | たくりんとんのブログ`,
          slug: `http://localhost:3000/`,
          children: Post,
          discription: `${json.title} | たくりんとんのブログ`, 
          image: `https://takurinton.com${json.contents_image_url}`,
          props: props,
        })
      )
    );
    res.setHeader('Content-Type', 'text/html')
    const renderd = '<!DOCTYPE html>' + _renderd;
    res.send(renderd);
  })
  .catch(err => { throw new Error(err) })
})

app.get('/me', (req, res) => {
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
