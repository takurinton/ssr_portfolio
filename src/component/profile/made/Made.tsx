import { MadeContent } from './MadeContent'

import { MadeProps } from '../../../props/props'
import { Heading } from '../../common/atoms/Heading'
const css = require('../../../styles/style/portfolio.scss')
const initialProps: MadeProps[] = [
    {
        id: 0, 
        name: "", 
        url: "", 
        explanation: ""

    }
]

export const Made = ({made = initialProps}) => {
    return (
        <div>
            <Heading text="Works" />
            <div className={css.component + ' ' + css.skill}>
                {
                    made.map(i => <MadeContent {...i} />)
                }
            </div>
        </div>
    )
}