import React from 'react';

const Html: React.FC<any> = (props) => {
    return (
        <html>
            <head>
                <title>App</title>
            </head>
            <body>
                <div id="app">{props.children}</div>
                {/* <script src="/static/bundle.js"></script> */}
            </body>
        </html>
    );
};

export default Html;