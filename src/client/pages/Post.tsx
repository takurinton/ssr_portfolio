import * as React from 'react';
import { PostProps } from '../../types/types'

export const Post: React.FC<PostProps> = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{ props.contents }</p>
        </div>
    )
}
