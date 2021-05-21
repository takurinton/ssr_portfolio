import fetch from 'node-fetch';

export const getPosts = (qs: string) => {
    return fetch(`https://api.takurinton.com/blog/v1/${qs}`)
}
  
export const getPost = (id: string) => {
    return fetch(`https://api.takurinton.com/blog/v1/post/${id}`)
}