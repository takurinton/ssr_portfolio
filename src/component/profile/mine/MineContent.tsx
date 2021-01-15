import { MineProps } from '../../../props/props'
const css = require('../../../styles/style/portfolio.scss')

export const MineContent = (mine: MineProps) => { 
    return (
        <div className={css.component}>
            <img src="https://www.takurinton.com/me.jpeg" alt="me"/>
            <h3>Takumi Katayama</h3>
            <p>{mine.content}</p>
            <p>Web制作のお仕事募集してます。<br />
                takurinton[at]takurinton.com、<br />
                takurinton[at]gmail.com、<br />
                TwitterのDMのいずれかにお問い合わせください。
            </p>
        </div>
    )
}
