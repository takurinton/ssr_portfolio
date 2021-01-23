import * as React from 'react';
import { Layout } from '../base/Layout';
import { Main } from '../components/pages/home/Main';
import { Posts } from '../components/pages/home/Posts';

import { PostsProps } from '../../types/types';

export const Home: React.FC<PostsProps> = Layout((props: PostsProps) => {
    return (
        <div>
            <Main />
            <Posts {...props} />
        </div> 
    )
});
