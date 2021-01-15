import React, { useState } from 'react'
import { postContact } from '../function/api/contact/post'

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

