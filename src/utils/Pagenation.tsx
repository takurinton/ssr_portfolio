import * as React from 'react';
import { PageButton } from '../client/components/utils/PageButton';

// const css = require('../styles/style/dairyreport.scss')

export const Pagination = ({ what = null, next = null, prev = null, category = null }) => {
    //@ts-ignore
    const nextButton = next === 'null' ? <></> : <PageButton what={what} to={next} category={category} char='prev' />
    //@ts-ignore
    const previousButton = prev === 'null' ? <></> : <PageButton what={what} to={prev} category={category} char='next' />
    return ( 
        <div>
            {nextButton} <br />
            {previousButton}
        </div>
    )
}