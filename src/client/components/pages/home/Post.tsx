import * as React from 'react';

import { h4, h5, p, pink_kawaii, theme_text, thick } from '../../../../styles/theme';
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
    background: #696969;
    border-radius: 3px;
    text-decoration: none;

    &: hover { 
        background: ${pink_kawaii}
    }
`

const box = css`
    margin: 3% auto; 
    padding: 20px 5% 10px; 
    box-shadow: 4px 4px 8px gray;
    width: 60%;
    text-align: center;
    line-height: 2;
    background: linear-gradient(90deg, $theme_main 5%, white 5%);

    @media (max-width: 800px) {
        width: auto;
    }

    img {
        width: 80%;
    }
`;

const pubdate = css`
    font-size: ${p};
    color: #222222;
`;

export const Post: React.FC<PostProps> = (props: PostProps) => {
    const pubDate = props.pub_date.substring(0, 10);
    const image = props.contents_image_url === '' ? 'https://www.takurinton.com/me.jpeg' : 'https://takurinton.com' + props.contents_image_url;
    return (
        <div key={props.id} className={box}>
            <div>
                <a href={`/post/${props.id}`} style={{ textDecoration: 'none' }}>
                    <h1 className={title}>{props.title}</h1>
                    <img src={image} alt={props.title} /> <br /> 
                    <p className={pubdate}>{pubDate}</p>
                </a>
            </div>
            <p><a href={`/?category=${props.category}`} className={category}>{props.category}</a></p>
            <br/>
        </div>
    )
}