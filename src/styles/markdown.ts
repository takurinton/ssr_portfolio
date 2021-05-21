import { css } from 'linaria';
import { h5, p, pink_kawaii } from './theme';

export const me = css`
    margin: 3% auto 5%;
    width: 50%;

    h1 {
        margin: 4% 0 1% 1%; 
        width: 100%
    }
    h2, .h3, .h4, .h5, .h6 {
        margin: 10px 0 2px 2%;
    }
    p {
        line-height: 2.4; 
        margin-left: 2%;
    }
    
    a {
        text-decoration: none;
    }
    
    table {
        margin-left: 4%
    }
    
    ul {
        line-height: 2;
        margin-left: 4%;
        margin-bottom: 1%;
    }
    li, p {
        font-size: 1.2rem;
    }
    
    .content-img { 
        margin: 30px 0 30px 4%;  
    }
    
    pre {
        padding: 10px;
        margin: 10px 0 10px 4%;
        overflow: auto;
        font-family:"メイリオ", sans-serif;
        background-color: #f0f0f0;
    }
    code {
        font-size: ${h5};
    }
    
    @media (max-width: 800px) {
        width: 90%;
        margin: 0 auto;
    }

    @media screen and (max-width: 500px) {
        .h1 {
            font-size: 1.6rem
        }
        .h2 {
            font-size: 1.3rem
        }
        img { 
            width: 80%;
        }
        li, p { 
            margin-left: 5%;
            font-size: 1rem;
        }

        li ul {
            margin-left: 0;
        }
    }
`

export const blog = css`
margin: 3% auto 5%;
    width: 50%;

    h1 {
        margin: 4% 0 1% 1%; 
        border-bottom: solid 2px ${pink_kawaii}; 
        width: 100%
    }
    h2 {
        border-bottom: solid 1.6px ${pink_kawaii}; 
    }
    h2, .h3, .h4, .h5, .h6 {
        margin: 10px 0 2px 2%;
    }
    p {
        line-height: 2.4; 
        margin-left: 4%;
    }
    
    a {
        text-decoration: none;
    }
    
    
    ul {
        line-height: 2;
        margin-left: 4%;
        margin-bottom: 1%;
    }

    li { 
        margin-left: 5%;
    }

    table {
        margin-left: 4%;
        width: auto;
    }
    
    table td {
        word-break : break-all;
    }
    
    .content-img { 
        margin: 30px 0 30px 4%;  
    }
    
    pre {
        padding: 10px;
        margin: 10px 0 10px 4%;
        overflow: auto;
        font-family:"メイリオ", sans-serif;
        background-color: #f0f0f0;
    }
    code {
        font-size: ${p};
    }
    
    @media (max-width: 800px) {
        width: 90%;

        code {
            font-size: ${p};
        }
    }

    @media screen and (max-width: 500px) {
        .h1 {
            font-size: 1.6rem
        }
        .h2 {
            font-size: 1.3rem
        }
        img { 
            width: 80%;
        }
    }`