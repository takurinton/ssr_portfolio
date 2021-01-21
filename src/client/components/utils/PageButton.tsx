import * as React from 'react'

import { getParams } from '../../../utils/getParams';

export const PageButton = ({ what = '', css = '', to = '', category = '', char = '' }) => {
    // const query:string | any = category === null ? { page: to } : { page: to, category: category }
    if (category === null) category = '';
    if (to === null) to = '';
    const qs = getParams(to, category)
    
    return (
        <a href={`/${qs}`}>
            <a className={css}>{char}</a>
        </a>
    )
}
