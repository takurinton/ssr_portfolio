import * as React from 'react';
import { Heading } from '../components/utils/Heading';
import { Gopher } from '../components/utils/Character/Gopher';
import { Layout } from '../base/Layout';

import { css } from 'linaria';
import { PostsProps, PostProps } from '../../types/types';
import { Pagination } from '../../utils/Pagenation';
import { pink_kawaii, theme_main } from '../../styles/theme';


const title = css`
    text-decoration: none; 
    font-size: 2rem;
    color: #222222;

    &: hover {
        color: ${pink_kawaii}
    }
`

const category = css`
    padding: 10px;
    text-align: center;
    font-size: 1.2rem;
    color: white;
    background: #222222;
    border-radius: 3px;
    text-decoration: none;

    &: hover { 
        background: ${pink_kawaii}
    }
`

const Post: React.FC<PostProps> = (props: PostProps) => {
    return (
        <div key={props.id}>
            <h1><a className={title} href={`/post/${props.id}`}>{props.title}</a></h1>
            <p><a href={`/?category=${props.category}`} className={category}>{props.category}</a></p>
            <br/>
        </div>
    )
}

const Posts: React.FC<PostsProps> = (props: PostsProps) => {
    const next = props.next 
    const prev = props.previous
    const title = props.category === null ? '全ての記事' : `${props.category}の記事一覧`

    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <Heading text={title} />
                <div >
                    <div>
                    {
                        props.results.map(post => ( <Post {...post} />) )
                    }
                    </div>   
                    {/* @ts-ignore */}
                    <Pagination what="" next={String(next)} prev={String(prev)} category={props.category} />
                </div>
            </div>
        </div>
    )
}

export const Main = () => {
    return (
        <div>
          <Gopher />
          {/* <Welcome /> */}
        </div>
    )
}

export const Home: React.FC<PostsProps> = Layout((props: PostsProps) => {
    return (
        <div>
            <Main />
            <Posts {...props} />
        </div> 
    )
});

