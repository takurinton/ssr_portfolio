import { Recognition} from '../../function/speech/recognition'
import React, { 
    useRef,
    useState,
  } from 'react'

import { morphemeDissected } from '../../function/speech/morphemeDissected'

const Search = () => {
    const recognition = useRef<Recognition>();
    const [input, setInput] = useState<string>('')
    const [initial, setInitial] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)
    const [post, setPost] = useState([])

    const state = {
        content: ''
    }

    const onStart = () => {
        const r = (recognition.current = new Recognition());
        r.onFinal = (c) => {
        r.toggle()
        state.content = c
        morphemeDissected(state.content)
    }}

    const onStop = () => {
        const r = (recognition.current = new Recognition());
        r.stop()
    }

    return ( 
        <div>
            <button onClick={onStart} >start</button>
            <h1>search page</h1>
        </div>
    )
}

export default Search