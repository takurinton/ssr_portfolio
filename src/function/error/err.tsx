import { Pien } from '../../component/common/Character/Pien'
export const Error = (res: {status: number}) => {
    const message = res.status === 404 ? 'Page Not Found' : 'Internal Server Error'
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ marginTop: '50px' }}>{message}</h1>
            <Pien />
        </div>
    )
}