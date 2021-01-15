import { MadeProps } from '../../../props/props'
const css = require('../../../styles/style/portfolio.scss')

export const MadeContent = (content: MadeProps) => { 
    return (
        <div className={css.worksContent}>
            <a href={content.url}>
                {content.name}
            </a>
        </div>
    )
}