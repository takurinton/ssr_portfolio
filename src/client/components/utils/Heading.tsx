import * as React from 'react';
// const css = require('../../../../src/styles/text.scss')
import '../../../../src/styles/text.scss'

export const Heading = (text: {text: string}) => {
    return (
        <div id="title">
            {text.text}
        </div>
    )
}