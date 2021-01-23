import * as React from 'react';

import { css } from 'linaria';
import { pink_kawaii, theme_subtext, theme_text, thick, h3, h4 } from '../../../../styles/theme';

const main = css`
    margin-top: 20px;
    position: relative;
    text-align: center;

    h1 { 
        margin: 0 auto 0;
        font-size: ${h3};
        font-weight: ${thick};
        color: ${theme_text};
        width: 50%;
        border-bottom: 2px solid ${pink_kawaii};  
    }
    p {
        margin-top: 10px;
        font-size: ${h4};
        color: ${theme_subtext};
    }

    @media (max-width: 500px) {
        h1 {
            width: 80%;
        }
    }
`

// import { Twitter, GitHub, This } from './SNS'

export const Welcome = () => {
    return (
        <div className={main}>
            <h1>たくりんとん</h1>
            <p>GoとPythonが好きな大学生</p>
            {/* <Twitter />
            <GitHub /> */}
            {/* <Facebook /> */}
            {/* <Blog /> */}
            {/* <This /> */}
        </div>
        
    )
}