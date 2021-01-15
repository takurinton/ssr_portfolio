export const postContact = async (body:object) => {
    await fetch(`https://api.takurinton.com/portfolio/v1/contact`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "same-origin",
        body: JSON.stringify(body), 
    })
    return
}