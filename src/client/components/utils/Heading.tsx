import * as React from 'react';
const css = require('../../../styles/text.scss')

export const Heading = (text: {text: string}) => {
    return (
        <div id={css.heading}>
            {text.text}
        </div>
    )
}