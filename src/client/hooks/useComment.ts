import React, { useState } from 'react';

export interface CommentProps {
    name: string, 
    contents: string, 
    pub_date: string
}
export const initialCommentState:CommentProps = {
    name: '', 
    contents: '', 
    pub_date: ''
}

const postComment = async (body:object, id:number) => {
    await fetch(`https://api.takurinton.com/blog/v1/comment/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "same-origin",
        body: JSON.stringify(body), 
    })
    return
}

export const useComment = () => {
    const [state, setState] = useState(initialCommentState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (body:object, id:number) => {
        postComment(body, id)
        setState(initialCommentState)
    }

    return {
        handleChange, 
        handleSubmit, 
        state, 
    }
}