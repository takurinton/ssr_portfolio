import fetch from 'node-fetch';

export const getPosts = async () => {
    const res = await fetch(`https://api.takurinton.com/blog/v1/`)
    return await res.json()
}
  
export const getPost = async (id: string) => {
    const res = await fetch(`https://api.takurinton.com/blog/v1/post/${id}`)
    return await res.json()
}