import * as React from 'react';
import { css } from "linaria";

import { h2, theme_text, thick } from '../../../styles/theme';

const title = css`
    margin-bottom: 10px;
    font-size: ${h2}; 
    color: ${theme_text};
    font-weight: ${thick};
`;

export const Heading = (text: {text: string}) => {
    return (
        <h1 className={title}>
            {text.text}
        </h1>
    )
}