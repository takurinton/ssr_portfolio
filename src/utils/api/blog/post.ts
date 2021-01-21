import fetch from 'node-fetch';

export const getPosts = async (qs: string) => {
    const res = await fetch(`https://api.takurinton.com/blog/v1/${qs}`)
    return await res.json()
}
  
export const getPost = async (id: string) => {
    const res = await fetch(`https://api.takurinton.com/blog/v1/post/${id}`)
    return await res.json()
}