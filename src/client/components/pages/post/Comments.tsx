import * as React from 'react';
import { css } from 'linaria';

import { Comment } from './Comment';
import { CommentProps } from '../../../../types/types';
import { useComment } from '../../../hooks/useComment'
import { CommentForm } from './CommentForm';

const form = css`
    margin: 0 auto;
    width: 50%;
    @media (max-width: 800px) {
        width: 85%;
    }
`;

export const Comments: React.FC = (props: { postId: number, comment: CommentProps[] }) => {
    const {
        handleChange, 
        handleSubmit, 
        state
    } = useComment()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmit(state, props.postId)
        props.comment.push(state)
    }

    return (
        <div className={form}>
            <CommentForm state={state} onChange={onChange} onSubmit={onSubmit} />
            {
                props.comment.map(comment => ( <Comment {...comment} /> ))
            }
        </div>
    )
}