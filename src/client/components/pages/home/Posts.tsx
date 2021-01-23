import * as React from 'react';

import { Post } from './Post';
import { Heading } from '../../utils/Heading';
import { Pagination } from '../../utils/Pagenation';

import { PostsProps } from '../../../../types/types';


export const Posts: React.FC<PostsProps> = (props: PostsProps) => {
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