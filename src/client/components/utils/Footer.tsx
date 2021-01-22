import * as React from 'react';
import { css } from "linaria";
import { h4, h5, pink_kawaii, theme_text, thick } from '../../../styles/theme';

const footer = css`
    margin: 50px auto 0;
    text-align: center;
    position: relative;
    height: 50px;
    background: white;
`;

const me = css`
    font-size: ${h5};
`;


export const Footer = () => {
    return (
        <div className={footer}>
            <p className={me}>
                takurinton
            </p>
        </div>
    )
};