import React, { useState } from 'react'

interface ContactProps {
    name: string, 
    mail: string, 
    contents: string, 
}
const initialContactState: ContactProps =  {
    name: '', 
    mail: '', 
    contents: ''
}

const postContact = async (body: object) => {
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

export const useContact = () => {
    const [state, setState] = useState(initialContactState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (body:object) => {
        postContact(body)
        setState(initialContactState)
    }

    return {
        handleChange, 
        handleSubmit, 
        state, 
    }
}