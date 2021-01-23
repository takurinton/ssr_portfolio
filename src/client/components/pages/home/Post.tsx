import * as React from 'react';

import { pink_kawaii } from '../../../../styles/theme';
import { css } from 'linaria';
import { PostProps } from '../../../../types/types';

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

export const Post: React.FC<PostProps> = (props: PostProps) => {
    return (
        <div key={props.id}>
            <h1><a className={title} href={`/post/${props.id}`}>{props.title}</a></h1>
            <p><a href={`/?category=${props.category}`} className={category}>{props.category}</a></p>
            <br/>
        </div>
    )
}