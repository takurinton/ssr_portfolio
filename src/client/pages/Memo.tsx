import * as React from 'react';
import { css } from 'linaria';

import { Heading } from '../components/utils/Heading'
import { Layout } from '../base/Layout';

export const Memo: React.FC = Layout(() => {
    return (
        <div>
            <div style={
                { 
                textAlign: 'center', 
                marginTop: '50px', 
                }}>
                <Heading text="技術や日常のメモ置き場" />
                <h1>comming soon</h1>
            </div>
           {/* <div className={css.main} dangerouslySetInnerHTML={{ __html: md }} /> */}
        </div>
    )
})