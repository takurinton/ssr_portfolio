import express from 'express';
import * as React from 'react';
import ReactDomServer from 'react-dom/server'

import { Home } from '../client/pages/Home';
import { About } from '../client/pages/About';
import { Post } from '../client/pages/Post';
import { Me } from '../client/pages/Me';
import { Contact } from '../client/pages/Contact';

import Html from '../client/base/Html';

import { getPosts, getPost } from '../utils/_api/blog/post';

import { PostProps } from '../types/types';

import { getParams } from '../utils/getParams';
import { changeDate } from '../utils/changeDate';

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
  res.setHeader('Content-Type', 'text/html; charset=utf8')
  res.write('<!DOCTYPE html>');

  getPosts(qs)
  .then(res => res.json())
  .then(json => {
    ReactDomServer.renderToStaticNodeStream(
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
    ).pipe(res);
  })
  .catch(err => {
    res.setHeader('Content-Type', 'text/html; charset=utf8')
    res.send(err);
  });
});

app.get('/about', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf8')
  ReactDomServer.renderToStaticNodeStream(
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
  ).pipe(res);
});

app.get('/post/:id', (req, res) => {
  const id = req.params.id;
  res.setHeader('Content-Type', 'text/html; charset=utf8')
  res.write('<!DOCTYPE html>');
  getPost(id)
  .then(res => res.json())
  .then(json => {
    syntaxHighlight() 
    const r: marked.Renderer = markdownStyle()
    const md: string = marked(json.contents, {renderer: r})
    const pubDate = changeDate(json.pub_date);
  
    const props: PostProps = {
      id: json.id,
      title: json.title, 
      category: json.category,
      contents: md, 
      contents_image_url: json.contents_image_url,
      pub_date: pubDate,
      comment: json.comment
    }
  
    ReactDomServer.renderToStaticNodeStream(
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
    ).pipe(res);
  })
  .catch(err => { throw new Error(err) })
})

app.get('/me', (req, res) => {
  const lang = req.query.lang === 'en' ? 'en' : 'ja';
  res.setHeader('Content-Type', 'text/html; charset=utf8')
  res.write('<!DOCTYPE html>');
  ReactDomServer.renderToStaticNodeStream(
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
  ).pipe(res);
})

app.get('/memo', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf8')
  res.write('<!DOCTYPE html>');
  ReactDomServer.renderToStaticNodeStream(
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
  ).pipe(res);
});

app.get('/contact', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf8')
  res.write('<!DOCTYPE html>');
  ReactDomServer.renderToStaticNodeStream(
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
  ).pipe(res);
});
