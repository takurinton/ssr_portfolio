import { SkillProps } from '../../../props/props'
const css = require('../../../styles/style/portfolio.scss')

export const SkillContent = (content: SkillProps) => { 
    return (
        <div className={css.skillContent}>
            <p>{content.name}</p>
        </div>
    )
}