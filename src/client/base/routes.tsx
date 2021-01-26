import * as React from 'react';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Post } from '../pages/Post';
import { Me } from '../pages/Me';
import { Contact } from '../pages/Contact';
import { Memo } from '../pages/Memo';

const Routes = (): React.FC => {
  const Component = (): React.FC => {
    const path = window.location.pathname.split('/')[1]; // postに対する応急処置，あとでrouterはしっかり実装する
    const json = JSON.parse(document.getElementById('json').getAttribute('data-json'));
    switch (path) {
      case '':
        return <Home {...json} />;  
      case 'about':
        return <About />;
      case 'me':
        return <Me />;
      case 'post':
        return <Post {...json} />;
      case 'contact':
        return <Contact />;
      case 'memo':
        return <Memo />;
      default: 
        return <h1>page is not found</h1>;
    }
  }
  return <Component />;
};

export default Routes;