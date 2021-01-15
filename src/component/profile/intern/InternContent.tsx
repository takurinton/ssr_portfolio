import { InternProps } from '../../../props/props'
const css = require('../../../styles/style/portfolio.scss')

export const InternContent = (content: InternProps) => { 
    return (
        <div className={css.intern}>
            <h3>{content.company_name}</h3>
            <p>{content.overview}</p>
            <p>{content.period}</p>
        </div>
    )
}