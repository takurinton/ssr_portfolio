import { CommentContent} from './CommentContent'
import { CommentProps } from '../../../props/props'
import { useComment } from '../../../hooks/useComment'
import { CommentForm } from './CommentForm'
const css = require('../../../styles/style/input.scss')

export const Comment = (props: { postId: number, comment: CommentProps[] }) => {
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
        <div className={css.form}>
            <CommentForm state={state} onChange={onChange} onSubmit={onSubmit} />
            {
                props.comment.map(c => ( <CommentContent {...c} /> ))
            }
        </div>
    )
}