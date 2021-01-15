import Link from 'next/link'
import { Dairyreport } from '../../props/props'

const css = require('../../styles/style/dairyreport.scss')

export const DairyreportContent = (dairyreport: Dairyreport) => {
    const pubDate = dairyreport.pub_date.substring(0, 10)
    return (
        <div className={css.box}>
            <Link href="/dairyreport/post/[id]" as={`/dairyreport/post/${dairyreport.id}`}>
                <a>{pubDate}</a>
            </Link>
        </div>
    )
}