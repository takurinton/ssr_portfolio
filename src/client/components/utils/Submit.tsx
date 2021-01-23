import * as React from 'react';

import { css } from 'linaria';
import { theme_main, h5 } from '../../../styles/theme';

const submit = css`
    padding: 10px auto;
    background: ${theme_main};
    text-align: center;
    color: white; 
    width: 150px;
    height: 30px;
    font-size: ${h5}; 
    border: none;
    border-radius: 5px;
`


export const Submit = () => {
    return (
        <button type="submit" className={submit}>送信</button>
    )
}