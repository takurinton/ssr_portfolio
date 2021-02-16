import * as React from 'react';
import { css } from 'linaria';

import { Post } from './Post';
import { Heading } from '../../utils/Heading';
import { Pagination } from '../../utils/Pagenation';

import { PostsProps } from '../../../../types/types';


const main = css`
    margin-top: 130px; 
    text-align: center;
`;

const home = css`
    width: 60%;
    margin: auto;
    @media (max-width: 800px) {
        width: 80%;
    }
`;


export const Posts = (props: PostsProps) => {
    const next = props.next 
    const prev = props.previous
    const title = props.category === null ? '全ての記事' : `${props.category}の記事一覧`

    return (
        <div style={{textAlign: 'center'}} className={main}>
            <div>
                <Heading text={title} />
                <div className={home}>
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