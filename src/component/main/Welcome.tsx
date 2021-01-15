const css = require('../../styles/style/home.scss')

import { Twitter, GitHub, This } from './SNS'

export const Welcome = () => {
    return (
        <div className={css.main}>
            <h1>たくりんとん</h1>
            <p>GoとPythonが好きな大学生</p>
            <Twitter />
            <GitHub />
            {/* <Facebook /> */}
            {/* <Blog /> */}
            <This />
        </div>
        
    )
}