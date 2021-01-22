import * as React from 'react'

import { getParams } from '../../../utils/getParams';

export const PageButton = ({ what = '', css = '', to = '', category = '', char = '' }) => {
    if (category === null) category = '';
    if (to === null) to = '';
    const qs = getParams(to, category)

    return (
        <a href={`/${qs}`}>
            <p id={char}>{char}</p>
            {/* <p className={css}>{char}</p> */}
        </a>
    )
}
