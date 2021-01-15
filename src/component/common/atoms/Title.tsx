const css =  require('../../../styles/text.scss')

export const Title = (text: string) => {
    return (
        <text id={css.title}>
            {text}
        </text>
    )
}
