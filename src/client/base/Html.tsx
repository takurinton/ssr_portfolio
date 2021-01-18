import * as React from 'react';

const Head = (props) => {
    console.log(props.description);
    if (props.description == undefined) props.description = 'たくりんとんのポートフォリオです';
    if (props.image == undefined) props.image = 'https://www.takurinton.com/me.jpe';
    return (
        <head>
            <title>{props.title}</title>
            <meta name="description" content={props.discription} />
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
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/solarized-dark.min.css" />
      </head>
    )
}

interface Props {
    children: () => React.FC;
    title: string;
    props?: any;
    slug: string;
}


const Html = (props: Props) => {
    return () => (
        <html lang="ja">
            <Head {...props} />
            <body>
                <h1>headerがここにはいる</h1>
                <div id="main">
                    <props.children {...props.props} />
                </div>
                <script async defer src='./client/app.js' />
            </body>
        </html>
    );
};

export default Html;