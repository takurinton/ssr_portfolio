import * as React from 'react';
import { css } from "linaria";
import { styled } from '@linaria/react';
import { h4, h5, pink_kawaii, theme_text, thick } from '../../../styles/theme';

const Header_ = styled.header`
    padding: 20px 20% 0;
    position: relative;
    vertical-align: middle;
    height: 50px;
    background: white;
`

const title = css`
    padding-left: 20px;
    float: left;
    a {
        color: ${theme_text};
        text-decoration: none;
        font-size: ${h4};
        font-weight: ${thick};
    }
`

const page = css`
    float: right;
    line-height: 30px;
    padding-right: 20px;
    a {
        color: ${theme_text};
        text-decoration: none;
        font-size: ${h5};
        font-weight: ${thick};
    }
`

export const Header = () => {
    return (
        <Header_>
            <p className={title}>
                <a href="/">takurinton.com</a>
            </p>
            <p className={page}>
                <a href="/contact">contact</a>
            </p>
            {/* <p className={page}>
                <Link href="/dairyreport"><a>dailyreport</a></Link>
            </p> */}
            <p className={page}>
                <a href="/memo">memo</a>
            </p>
            <p className={page}>
                <a href="/me">me</a>
            </p>
        </Header_>
    )
}

