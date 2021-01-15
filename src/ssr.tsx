import * as React from 'react';
import { renderToString } from 'react-dom/server';


const ssr = (Component): string => {
  return (
    `
    <html>
      <head>
        <title>CountUp</title>
        <meta charset="utf-8"/>
      </head>
      <body>
        <div id="app">
          ${renderToString(<Component />)}
        </div>
      </body>
    </html>
  `
  )
};

export default ssr;
