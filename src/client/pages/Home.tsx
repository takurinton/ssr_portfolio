import * as React from 'react';

export type Posts = {
    next: string | null, 
    previous: string | null, 
    total: number, 
    category: any,
    current: number, 
    results: PostProps[], 
    page_size: string, 
    first: string, 
    last: string
}

export type PostProps = {
    id: number,
    title: string, 
    category: string,
    contents: string, 
    contents_image_url: string,
    pub_date: string,
    comment: CommentProps[]
}

export interface CommentProps {
    name: string, 
    contents: string, 
    pub_date: string
}

const Post: React.FC<PostProps> = (props: PostProps) => {
    return (
        <div>
            <p><a href={`/post/${props.id}`}>{props.title}</a></p>
        </div>
    )
}


export const Home: React.FC<Posts> = (props: Posts) => {
    return (
        <div>
            {
                props?.results.map(post => <Post {...post} />)
            }
        </div>
    )
}

