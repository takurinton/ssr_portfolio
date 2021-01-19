import * as React from 'react';
import css from '../../../styles/text.scss';

export const Heading = (text: {text: string}) => {
    return (
        <div id={css.heading}>
            {text.text}
        </div>
    )
}