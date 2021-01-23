import * as React from 'react';

import { css } from 'linaria';
import { theme_main } from '../../../styles/theme';

import { Submit } from '../utils/Submit'
import { Heading } from '../utils/Heading'

const form = css`
    margin: 0 auto;
    width: 50%;
    @media (max-width: 800px) {
        width: 85%;
    }
`;

const input = css`
    margin: 20px 0;
    border: none; 
    border-bottom: 2px solid ${theme_main};
    font-size: $h5; 
    height: $h4;
    width: 80%;
`;

const textarea = css`
    margin: 20px 0;
    border: none; 
    border-bottom: 2px solid ${theme_main};
    font-size: $h5; 
    height: $h4;
    width: 100%;
`;

export const ContactForm = (value: {state: any, onChange: any, onSubmit: any }) => {
    return (
        <form onSubmit={value.onSubmit}>
            <Heading text='Contact' />
            <input type="text" onChange={value.onChange} name="name" value={value.state.name} required={true} placeholder="お名前" className={input} />
            <input type="mail" onChange={value.onChange} name="mail" value={value.state.mail} required={true} placeholder="メールアドレス" className={input} />
            <textarea onChange={value.onChange} name="contents" value={value.state.contents} required={true} placeholder="お問い合わせ内容：例）お顔がとてもイケメンですね" className={textarea} />
            <Submit />
        </form>
    )
};