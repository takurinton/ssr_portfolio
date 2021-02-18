import * as React from 'react';
import ReactDOM from 'react-dom';
const fetch = require('node-fetch');

import { Home } from '../../pages/Home';
import { Post } from '../../pages/Post';


export const Link = ({
        href, Component, isJson
    } : {
        href: string, Component: any, isJson: boolean
    }) => {
        React.useEffect(() => {
            prefetch(href, Component, isJson)
        }, [])
    return (
        <></>
    )
  }
  
  const prefetch = (_href: string, Component: any, isJson: boolean) => {
    if (typeof window === 'undefined') return;
    if (_href.match('/http:/') || _href.match('/https:/')) return;
    const href = `/pre${_href}`
    if (isJson) {
      fetch(href)
      .then(res => res.json())
      .then(json => {
        ReactDOM.hydrate(
          <Component {...json} />, 
          document.getElementById('main')
        )
      })
    } else {
      ReactDOM.render(
        <Component />, 
        document.getElementById('main')
      )
    }
  }