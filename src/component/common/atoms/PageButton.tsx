import React from 'react'
import Link from 'next/link'
export const PageButton = ({ what = '', css = '', to = '', category = '', char = '' }) => {
    const query:string | any = category === null ? { page: to } : { page: to, category: category }
    return (
        <Link href={{ pathname: `/${what}`, query: query }}>
            <a className={css}>{char}</a>
        </Link>
    )
}
