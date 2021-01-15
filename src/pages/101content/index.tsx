import { Mine101Content } from '../../component/profile/mine/Mine101Content'
import { Mine101ContentProps } from '../../props/props'
import { HtmlHead } from '../../component/common/Head'

const Mine101Contents = (props: { res:Mine101ContentProps[] }) => {
    return (
        <div style={{textAlign: 'center', marginTop: '60px'}}>
            <HtmlHead
                title="たくりんとん | 101のこと"
                 description="たくりんとんを表す101のこと"
                 image="https://www.takurinton.com/me.jpeg" 
                 url="https://www.takurinton.com"
            />
            <style>
                {`
                    .main {
                        width: 80%;
                        margin: 20px auto;
                        display: flex; 
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                `}
            </style>
            <h1 style={{ fontSize: '2rem'}}>僕を表す101キーワード</h1>
            <div className="main">
                {
                    props.res.map(m => <Mine101Content {...m} />)
                }
            </div>
        </div>
    )
}

Mine101Contents.getInitialProps = async () => {
    const res = await fetch("https://api.takurinton.com/portfolio/v1/mine101content/")
    const response = await res.json()
    return { res: response }
}

export default Mine101Contents