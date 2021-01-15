import { Pagination } from '../../component/common/parts/Pagination'
import { GetPost } from '../../props/props'
import { BlogContent } from '../blog/BlogContent'
import { Heading } from '../../component/common/atoms/Heading'
const css = require('../../styles/style/blog.scss')


export const Blog = (props: {props: GetPost}) => {
    const next = props.props.next 
    const prev = props.props.previous
    const title = props.props.category === null ? '全ての記事' : `${props.props.category}の記事一覧`

    return (
        <div>
            <div className={css.main}>
                <Heading text={title} />
                <div className={css.home} >
                    <div className={css.items}>
                    {
                        props.props.results.map(p => ( <BlogContent {...p} />) )
                    }
                    </div>   
                    {/* @ts-ignore */}
                    <Pagination what="" next={String(next)} prev={String(prev)} category={props.props.category} />
                </div>
            </div>
        </div>
    )
}