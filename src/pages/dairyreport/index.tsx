import { DairyreportProps } from '../../props/props'
import { Dairy } from '../../component/dairyreport/Dairy'

const Main = (res: { res: DairyreportProps, status: number }) => {
    return (
        <Dairy props={res.res} />
    )
}

Main.getInitialProps = async (context:any) => {
    const query = context.asPath.split('?').length === 1 ? '' : '?' + context.asPath.split('?')[1] // 汚いので要修正
    const res = await fetch(`https://api.takurinton.com/dairyreport/v1/${query}`)
    const response = await res.json()
    return { res: response, status: res.status }
    // return dairyreport mock
}

export default Main