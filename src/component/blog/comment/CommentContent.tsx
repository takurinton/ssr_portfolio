import { CommentProps } from "../../../props/props"
const css = require('../../../styles/style/blog.scss')

export const CommentContent = (comment: CommentProps) => {
    return (
        <div className={css.comment}>
            <p>{comment.name}</p>
            <span>{comment.contents}</span>
            {/* TODO コメントの投稿時間の整形 */}
            {/* <p>{comment.pub_date}</p> */}
        </div>
    )
}