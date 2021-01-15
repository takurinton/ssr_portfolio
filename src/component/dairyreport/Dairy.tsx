import { Pagination } from '../../component/common/parts/Pagination'
import { DairyreportContent } from './Dairtreport'
import { DairyreportProps } from '../../props/props'
import { HtmlHead } from '../../component/common/Head'
// import dairyreport from '../../../mock/dairyreport.json'
import { Heading } from '../../component/common/atoms/Heading'
const css = require('../../styles/style/dairyreport.scss')


export const Dairy = (props: {props: DairyreportProps}) => {
    const next = props.props.next 
    const prev = props.props.prev
    return (
        <div>
            <HtmlHead 
                title={'たくりんとん | 日報'}
                description={'たくりんとんのポートフォリオです'}
                image={'https://www.takurinton.com/me.jpeg'}
                url={'https://takurinton.com'}
            />
            <div className={css.main}>
                <Heading text="Daily report" />
                <div className={css.home} >
                    <div className={css.items}>
                    {
                        props.props.results.map(p => (<DairyreportContent {...p} />))
                    }
                    </div>   
                    <Pagination what="dairyreport" next={String(next)} prev={String(prev)} />
                </div>
            </div>  
        </div>
    )
}
