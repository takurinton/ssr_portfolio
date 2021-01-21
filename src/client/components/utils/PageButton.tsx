import * as React from 'react'

import { getParams } from '../../../utils/getParams';

export const PageButton = ({ what = '', css = '', to = '', category = '', char = '' }) => {
    if (category === null) category = '';
    if (to === null) to = '';
    const qs = getParams(to, category)

    return (
        <a href={`/${qs}`}>
            <a className={css}>{char}</a>
        </a>
    )
}
