import Link from 'next/link'
import { PostProps } from '../../props/props'

const css = require('../../styles/style/blog.scss')

export const BlogContent = (post: PostProps) => {
    const pubDate = post.pub_date.substring(0, 10)
    const image = post.contents_image_url === '' ? 'https://www.takurinton.com/me.jpeg' : 'https://takurinton.com' + post.contents_image_url
    return (
        <div className={css.box}>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
                <div className={css.content}>
                    {/* あとでbr消しておいてね */}
                    <img src={image} alt={post.title} /> <br /> 
                    <h1>{post.title}</h1>
                </div>
            </Link>
            <a href={`/?category=${post.category}`}>{post.category}</a>
            <p>{pubDate}</p>
        </div>
    )
}