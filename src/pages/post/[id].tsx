import { BlogDetail } from '../../component/blog/BlogDetail'

import { PostProps } from '../../props/props'


const Post = (res: { res: PostProps, status: number}) => {
  return (
    <BlogDetail props={res.res} />
  )
}

Post.getInitialProps = async (context:any) => {
    const { id } = context.query
    const res = await fetch(`https://api.takurinton.com/blog/v1/post/${id}`)
    // const res = await fetch(`http://localhost:8080/blog/v1/post/${id}`)
    const response = await res.json()
    return { res: response, status: res.status }
}

export default Post