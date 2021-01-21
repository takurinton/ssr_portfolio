import * as React from 'react';
import { Heading } from '../components/utils/Heading';
import { Gopher } from '../components/utils/Character/Gopher';

import { PostsProps, PostProps } from '../../types/types';
import { Pagination } from '../../utils/Pagenation';

// const css = require('../../../src/styles/style/blog.scss');
import '../../../src/styles/style/blog.scss';

const Post: React.FC<PostProps> = (props: PostProps) => {
    return (
        <div>
            <p><a href={`/post/${props.id}`}>{props.title}</a></p>
        </div>
    )
}

const Posts: React.FC<PostsProps> = (props: PostsProps) => {
    const next = props.next 
    const prev = props.previous
    const title = props.category === null ? '全ての記事' : `${props.category}の記事一覧`

    return (
        <div>
            <div className="main">
                <Heading text={title} />
                <div className="home" >
                    <div className="items">
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

export const Home: React.FC<PostsProps> = (props: PostsProps) => {
    return (
        <Posts {...props} />
    )
}

