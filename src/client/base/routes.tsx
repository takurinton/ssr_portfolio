import * as React from 'react';
import ReactDOM from 'react-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Post } from '../pages/Post';
import { Me } from '../pages/Me';
import { Contact } from '../pages/Contact';
import { Memo } from '../pages/Memo';


const Routes = () => {
  // 2home
//   fetch('/pre/posts')
//   .then(res => res.json())
//   .then(json => {
//     Array.from(document.getElementsByClassName("home")).forEach(h => {
//       h.addEventListener("click", e => {
//         e.preventDefault()
//         history.pushState(null, 'たくりんとん', '/')
//         ReactDOM.render(
//             <Home {...json} />, 
//             document.getElementById('main')
//         );
//     });
    
//   });

//   // 2me
//   Array.from(document.getElementsByClassName("me")).forEach(m => {
//     m.addEventListener('click', e => {
//       e.preventDefault()
//       history.pushState(null, 'たくりんとん | me', '/me')
//       ReactDOM.render(
//           <Me />, 
//           document.getElementById('main')
//       );
//     })
//   })

//   Array.from(document.getElementsByClassName('post')).forEach(p => { 
//     const id = p.getAttribute("href").split('/')[2]
//     fetch(`/pre/post/${id}`)
//     .then(res => res.json())
//     .then(json => {
//       p.addEventListener('click', e => {
//         e.preventDefault()
//         history.pushState(null, `たくりんとん | ${json.title}`, `/post/${id}`)
//         ReactDOM.render(
//             <Post {...json} />, 
//             document.getElementById('main')
//         );
//       })
//     })
//   })
// });

  const Component = () => {
    const path = window.location.pathname.split('/')[1]; 
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
  ReactDOM.hydrate(
    <Component />, 
    document.getElementById('main')
  );
};

export default Routes;