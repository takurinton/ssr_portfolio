import React, { useState } from 'react'
import { initialCommentState } from '../props/props'
import { postComment } from '../function/api/comment/post'

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

