// import { Heading } from '../../common/atoms/Heading'
import { Submit } from '../../common/atoms/Submit'

export const CommentForm = (value: {state: any, onChange: any, onSubmit: any }) => {
    return (
        <form onSubmit={value.onSubmit}>
            <h1>コメント</h1>
            <input type="text" onChange={value.onChange} name="name" value={value.state.name} required={true} placeholder="お名前" />
            <textarea onChange={value.onChange} name="contents" value={value.state.contents} required={true} placeholder="コメントを入力"/>
            <Submit />
        </form>
    )
}