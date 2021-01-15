const css = require('../../styles/style/home.scss')

export const Twitter = () => {
    return (
        <a href="https://twitter.com/takurinton" >
            <img src="twitter.png" className={css.snsicon} alt="twitter"/>
        </a>
    )
}

export const GitHub = () => {
    return (
        <a href="https://github.com/takurinton">
            <img src="github.png" className={css.snsicon} alt="github"/>
        </a>
    )
}

export const Facebook = () => {
    return (
        <a href="https://facebook.com/takurinton">
            <img src="" className={css.snsicon} alt="facebook"/>
        </a>
    )
}

export const Blog = () => {
    return (
        <a href="https://blog.takurinton.com">
            <img src="me.jpeg" className={css.snsicon} alt="blog"/>
        </a>
    )
}


export const This = () => {
    return (
        <a href="https://github.com/takurinton/portfolio">
            <img src="me.jpeg" className={css.snsicon} alt="me"/>
        </a>
    )
}
