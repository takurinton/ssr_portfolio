import * as React from 'react'

export const PageButton = ({ what = '', css = '', to = '', category = '', char = '' }) => {
    const query:string | any = category === null ? { page: to } : { page: to, category: category }
    return (
        <a href={{ pathname: `/${what}`, query: query }}>
            <a className={css}>{char}</a>
        </a>
    )
}
