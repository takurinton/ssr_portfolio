import * as React from 'react';
import { css } from "linaria";
import { h4, h5, pink_kawaii, theme_text, thick } from '../../../styles/theme';

const footer = css`
    margin: 100px auto;
    text-align: center;
    position: relative;
    background: white;
    height: 50px;
`;

const me = css`
    font-size: ${h5};
`;


export const Footer = () => {
    return (
        <div className={footer}>
            <p className={me}>
                {/* takurinton */}
            </p>
        </div>
    )
};