import { Home } from '../component/main/Home'
import { Blog } from '../component/blog/Blog'
import { GetPost } from '../props/props'

const Main = (res: {res: GetPost, status: number}) => {
    return (
        <div>
            <Home />
            <Blog props={res.res}/>
        </div>
    )
}

Main.getInitialProps = async (context:any) => {
    const query = context.asPath.split('?').length === 1 ? '' : '?' + context.asPath.split('?')[1] // 汚いので要修正
    const res = await fetch(`https://api.takurinton.com/blog/v1/${query}`)
    // const res = await fetch(`http://localhost:8080/blog/v1/${query}`)
    const status = res.status
    const response = await res.json()
    return { res: response, status: status }
}
export default Main