import * as React from 'react';
import { css } from "@linaria/core";
import { h4, h5, pink_kawaii, theme_text, thick } from '../../../styles/theme';

const header = css`
    padding: 20px 20% 0;
    position: relative;
    vertical-align: middle;
    height: 50px;
    background: white;
`

const title = css`
    padding-left: 20px;
    float: left;
    color: ${theme_text};
    text-decoration: none;
    font-size: ${h4};
    font-weight: ${thick};
`

const page = css`
    float: right;
    line-height: 30px;
    padding-right: 20px;
    color: ${theme_text};
    text-decoration: none;
    font-size: ${h5};
    font-weight: ${thick};
    &:hover {
        color: ${pink_kawaii};
    }
`

export const Header = () => {
    return (
        <div className={header} >
            <p className={title}>
                <a href="/"><a>takurinton.com</a></a>
            </p>
            <p className={page}>
                <a href="/contact"><a>contact</a></a>
            </p>
            {/* <p className={page}>
                <Link href="/dairyreport"><a>dailyreport</a></Link>
            </p> */}
            <p className={page}>
                <a href="/memo"><a>memo</a></a>
            </p>
            <p className={page}>
                <a href="/me"><a>me</a></a>
            </p>
        </div>
    )
}

