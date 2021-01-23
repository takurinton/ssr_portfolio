import * as React from 'react';
import { css } from 'linaria';

import { CommentProps } from "../../../../types/types";
import { h5, p, theme_text, thick } from '../../../../styles/theme';

const _comment = css`
    margin: 20px 0;
    padding: 0 0 5px;
    border-bottom: 2px solid rgb(221, 221, 221);

    p, span {
        color: ${theme_text};
    }

    p {
        padding-bottom: 10px;
        font-size: ${h5};
        font-weight: ${thick};
    }
    span {
        font-size: ${p};
    }    
`

export const Comment: React.FC = (comment: CommentProps) => {
    return (
        <div className={_comment}>
            <p>{comment.name}</p>
            <span>{comment.contents}</span>
            {/* TODO コメントの投稿時間の整形 */}
            {/* <p>{comment.pub_date}</p> */}
        </div>
    )
}