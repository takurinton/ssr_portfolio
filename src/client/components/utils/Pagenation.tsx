import * as React from 'react';
import { PageButton } from './PageButton';

import { css } from 'linaria';
import { button_color, h4, pink_kawaii, theme_back, theme_main, thick } from '../../../styles/theme';
// const css = require('../styles/style/dairyreport.scss')


const pagination = css`
    margin: 30px auto 0;
    width: 50%;
    position: relative;
`;

const pButton = css`  
    position: absolute;
    padding: 10px auto;
    background: ${theme_main};
    text-align: center;
    color: white; 
    width: 100px;
    font-size: ${h4}; 
    border: none;
    border-radius: 5px;
    text-decoration: none;
    left: 0;
    &: hover {
        background: ${pink_kawaii}
    }
`;

const nButton = css`
    position: absolute;
    padding: 10px auto;
    background: ${theme_main};
    text-align: center;
    color: white; 
    width: 100px;
    font-size: ${h4}; 
    border: none;
    border-radius: 5px;
    text-decoration: none;
    right: 0;
    &: hover {
        background: ${pink_kawaii}
    }
`;


export const Pagination = ({ what = null, next = null, prev = null, category = null }) => {
    //@ts-ignore
    const nextButton = next === 'null' ? <></> : <PageButton what={what} css={nButton} to={next} category={category} char='prev' />
    //@ts-ignore
    const previousButton = prev === 'null' ? <></> : <PageButton what={what} css={pButton} to={prev} category={category} char='next' />
    return ( 
        <div className={pagination}>
            {nextButton}
            {previousButton}
        </div>
    )
}