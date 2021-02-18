import * as React from 'react';
import ReactDOM from 'react-dom';
import { css } from "linaria";
import { h4, h5, pink_kawaii, theme_text, thick } from '../../../styles/theme';

import { Link } from './Link';

const header = css`
    padding: 0 20% 10px;
    position: relative;
    vertical-align: middle;
    height: 50px;
    background: white;
`;

const domain = css`
    padding-left: 20px;
    float: left;
    a {
        color: ${theme_text};
        text-decoration: none;
        font-size: ${h4};
        font-weight: ${thick};
    }
    a:hover {
        color: ${pink_kawaii};
    }
`;

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

    a:hover {
        color: ${pink_kawaii};
    }
`;

import { Home } from '../../pages/Home'

export const Header = () => {
    return (
        <div className={header}>
            <Link {...{href: '/posts', Component: Home, isJson: true}} />
                <p className={domain}>
                    <a href="/" className="home">takurinton.com</a>
                </p>
            <p className={page}>
                <a href="/contact">contact</a>
            </p>
            <p className={page}>
                <a href="/memo">memo</a>
            </p>
            <p className={page}>
                <a href="/me" className="me">me</a>
            </p>
        </div>
    )
};

