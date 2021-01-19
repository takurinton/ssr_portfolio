import * as React from 'react';
import { PostsProps, PostProps } from '../../types/types'

const Post: React.FC<PostProps> = (props: PostProps) => {
    return (
        <div>
            <p><a href={`/post/${props.id}`}>{props.title}</a></p>
        </div>
    )
}


export const Home: React.FC<PostsProps> = (props: PostsProps) => {
    return (
        <div>
            {
                props?.results.map(post => <Post {...post} />)
            }
        </div>
    )
}

