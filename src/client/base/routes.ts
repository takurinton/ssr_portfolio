import Home from '../pages/Home';
import About from '../pages/About';
import Post from '../pages/Post';

const routes = [
    {
        routes: [
            { 
                path: '/',
                exact: true,
                component: Home
            },
            { 
                path: '/about',
                exact: true,
                component: About
            }, 
            { 
                path: '/post',
                exact: true,
                component: Post
            }, 
        ]
    }
];
  
  export default routes;