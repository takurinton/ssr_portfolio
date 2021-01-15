import { Submit } from '../common/atoms/Submit'
import { Heading } from '../common/atoms/Heading'

export const ContactForm = (value: {state: any, onChange: any, onSubmit: any }) => {
    return (
        <form onSubmit={value.onSubmit}>
            <Heading text='Contact' />
            <input type="text" onChange={value.onChange} name="name" value={value.state.name} required={true} placeholder="お名前" />
            <input type="mail" onChange={value.onChange} name="mail" value={value.state.mail} required={true} placeholder="メールアドレス" />
            <textarea onChange={value.onChange} name="contents" value={value.state.contents} required={true} placeholder="お問い合わせ内容：例）お顔がとてもイケメンですね"/>
            <Submit />
        </form>
    )
}