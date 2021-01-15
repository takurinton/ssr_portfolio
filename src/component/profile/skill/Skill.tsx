import { SkillContent } from './SkillContent'

import { SkillProps } from '../../../props/props'
import { Heading } from '../../common/atoms/Heading'
const css = require('../../../styles/style/portfolio.scss')

const initialProps: SkillProps[] = [
    {
        id: 0, 
        name: ''
    }
]

export const Skill = ({skill = initialProps}) => {
    return (
        <div>
            <Heading text="Skill" />
            <div className={css.component + ' ' + css.skill}>
                {
                    skill.map(i => <SkillContent {...i} />)
                }
            </div>
        </div>
    )
}