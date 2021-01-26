import * as React from 'react';
import dotenv from 'dotenv';

dotenv.config();

const STATIC_FILES = process.env.STATIC_FILES ?? 'http://localhost:3000';

const Head = (props) => {
    if (props.description == undefined) props.description = 'たくりんとんのポートフォリオです';
    if (props.image == undefined) props.image = 'https://www.takurinton.com/me.jpeg';
    return (
        <head>
            <link rel="preconnect" href="https://ssr-test.takurinton.vercel.app/" />
            <title>{props.title}</title>
            <meta http-equiv="content-type" charset="utf-8" />
            <meta name="description" content={props.description} />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:type" content="blog" />
            <meta property="og:url" content="https://www.takurinton.com" />
            <meta property="og:image" content={props.image} />
            <meta property="og:site_name" content={props.title} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={props.image} />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image" content={props.image} />
            <link rel="shortcut icon" href={"https://www.takurinton.com/me.jpeg"} />
            <link rel="apple-touch-icon" href={"https://www.takurinton.com/me.jpeg"} />
            <link rel="stylesheet" type="text/css" href={`https://takurinton.s3.amazonaws.com/client.css`} />
            {/* <link rel="stylesheet" type="text/css" href={`${STATIC_FILES}/client.css`} /> */}
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/solarized-dark.min.css" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <style>
            {`
                body {
                    padding: 0; 
                    margin: 0;
                    margin-bottom: 50px;
                    font-family: Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo, sans-serif;
                }
                @media (max-width: 414px) {
                    font-size: 80%;
                }
            `}
            </style>
      </head>
    )
}

interface Props {
    children: () => React.FC;
    title: string;
    image: string,
    discription: string,
    // data: {
    //     image: string, 
    //     discription: string,
    // }
    slug: string, 
    props?: any;
}


const Html = (props: Props) => {
    return () => (
        <html lang="ja">
            <Head {...props} />
            <body>
                <div id="main">
                    <props.children {...props.props} />
                </div>
                <script id="json" type="text/plain" data-json={ JSON.stringify(props.props) }></script>
                <script async defer src={`https://takurinton.s3.amazonaws.com/client.js`} />
                {/* <script async defer src={`${STATIC_FILES}/client.js`} /> */}
            </body>
        </html>
    );
};

export default Html;