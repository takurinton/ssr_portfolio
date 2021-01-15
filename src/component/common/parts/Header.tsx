import Link from 'next/link'

const css = require('../../../styles/style/header.scss')

export const Header = () => {
    return (
        <div className={css.header}>
            <p className={css.title}>
                <Link href="/"><a>takurinton.com</a></Link>
            </p>
            <p className={css.page}>
                <Link href="/contact"><a>contact</a></Link>
            </p>
            {/* <p className={css.page}>
                <Link href="/dairyreport"><a>dailyreport</a></Link>
            </p> */}
            <p className={css.page}>
                <Link href="/memo"><a>memo</a></Link>
            </p>
            <p className={css.page}>
                <Link href="/me"><a>me</a></Link>
            </p>
        </div>
    )
}

