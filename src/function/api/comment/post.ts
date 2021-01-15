export const postComment = async (body:object, id:number) => {
    await fetch(`https://api.takurinton.com/blog/v1/comment/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "same-origin",
        body: JSON.stringify(body), 
    })
    return
}