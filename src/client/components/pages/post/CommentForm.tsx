import * as React from 'react';
import { css } from 'linaria';

import { Submit } from '../../utils/Submit';
import { h4, h5, pink_kawaii } from '../../../../styles/theme';


const input = css`
    margin: 20px 0;
    border: 2px solid ${pink_kawaii};
    border-radius: 2px;
    font-size: ${h5}; 
    height: ${h4};
    width: 80%;
`;

const textarea = css`
    margin: 20px 0;
    border-radius: 2px;
    border: 2px solid ${pink_kawaii};
    font-size: ${h5}; 
    height: ${h4};
    width: 100%;
`;

export const CommentForm = (value: {state: any, onChange: any, onSubmit: any }) => {
    return (
        <form onSubmit={value.onSubmit}>
            <h1>コメント</h1>
            <input type="text" onChange={value.onChange} name="name" value={value.state.name} required={true} placeholder="お名前" className={input} />
            <textarea onChange={value.onChange} name="contents" value={value.state.contents} required={true} placeholder="コメントを入力" className={input} />
            <Submit />
        </form>
    )
}