import { PortfolioProps } from '../../props/props'
import { Intern } from './intern/Intern'
import { Skill } from './skill/Skill'
import { Made } from './made/Made'
import { MineContent } from './mine/MineContent'
import { HtmlHead } from '../../component/common/Head'
const css = require('../../styles/style/portfolio.scss')

export const Me = (props: {props: PortfolioProps}) => {
    const intern = props.props.intern 
    const skill = props.props.skill
    const made = props.props.made
    const mine = props.props.mine 

    return (
        <div>
            <HtmlHead 
                title={'たくりんとん | profile'}
                description={'たくりんとんのポートフォリオです'}
                image={'https://www.takurinton.com/me.jpeg'}
                url={'https://takurinton.com'}
            />

            <div className={css.main}>
            <MineContent {...mine} />
            <Intern intern={intern} />
            <Skill skill={skill} />
            <Made made={made} />
        </div>
        </div>
    )
}