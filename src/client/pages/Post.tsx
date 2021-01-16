import * as React from 'react';
import { PostProps } from '../../props/post'

const Post: React.FC<PostProps> = (props) => {
    return (
        <div>
            <h1>post</h1>
            <p>{ props.contents }</p>
        </div>
    )
}

export default Post;