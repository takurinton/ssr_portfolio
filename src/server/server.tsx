// import express from 'express';
const fastify = require('fastify');
const fastifyStatic = require('fastify-static');
const path = require('path')
const fetch = require('node-fetch');

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

const app = fastify();

// app.use(express.static('api'));
app.register(fastifyStatic, {
  root: path.join(process.cwd(), 'api')
})

app.listen(3000);

app.get('/', (req, res) => {
    const page = (req.query as { page: undefined | string }).page ?? '';
    const category = (req.query as { category: undefined | string }).category ?? '';
  
    const qs: string = getParams(page, category) ?? '';
  
    getPosts(qs)
    .then(res => res.json())
    .then(json => {
      const rendered = ReactDomServer.renderToStaticNodeStream(
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
      res.type('text/html; charset=utf8')
      res.raw.write('<!DOCTYPE html>');
      res.send(rendered);
    })
    .catch(err => {
      res.header("content-type", "text/html; charset=utf-8");
      res.raw.write('<!DOCTYPE html>');
      res.send(err);
    });
  });

app.get('/about', (req, res) => {
  res.headers({
    "content-type": "text/html; charset=utf8",
  });

  const rendered = ReactDomServer.renderToStaticNodeStream(
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
  )
  res.raw.write('<!DOCTYPE html>');
  res.send(rendered);
});

app.get('/post/:id', (req, res) => {
  const id: string = (req.params as { id: string }).id;
  res.headers({
    "content-type": "text/html; charset=utf8",
  });

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
  
    const rendered = ReactDomServer.renderToStaticNodeStream(
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
    res.raw.write('<!DOCTYPE html>');
    res.send(rendered);
  })
  .catch(err => { throw new Error(err) })
})

app.get('/me', (req, res) => {
  const { _lang } = req.query as { _lang?: string }
  const lang = _lang === 'en' ? 'en' : 'ja';
  res.headers({
    "content-type": "text/html; charset=utf8",
  });

  const rendered = ReactDomServer.renderToStaticNodeStream(
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
  )
  res.raw.write('<!DOCTYPE html>');
  res.send(rendered);;
})

app.get('/memo', (req, res) => {
  res.headers({
    "content-type": "text/html; charset=utf8",
  });

  const rendered = ReactDomServer.renderToStaticNodeStream(
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
  )
  res.raw.write('<!DOCTYPE html>');
  res.send(rendered);;
});

app.get('/contact', (req, res) => {
  res.headers({
    "content-type": "text/html; charset=utf8",
  });

  const rendered = ReactDomServer.renderToStaticNodeStream(
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
  res.raw.write('<!DOCTYPE html>');
  res.send(rendered);
});

app.get(`/pre/posts`, (req, res) => {
    const page = (req.query as { page: undefined | string }).page ?? '';
    const category = (req.query as { category: undefined | string }).category ?? '';
    const qs: string = getParams(page, category) ?? '';

    getPosts(qs)
    .then(res => res.json())
    .then(json => {
        res.type('application/json');
        res.send(json);
    })
    .catch(() => {
        res.type('application/json');
        res.send('page not found');
    })
})

app.get(`/pre/post/:id`, (req, res) => {
    const id: string = (req.params as { id: string }).id;

    getPost(id)
    .then(res => res.json())
    .then(json => {
        res.type('application/json');
        res.send(json);
    })
    .catch(() => {
        res.type('application/json');
        res.send('page not found');
    })
})