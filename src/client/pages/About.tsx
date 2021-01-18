import * as React from 'react';

export const About: React.FC = () => {
    const [count, setCount] = React.useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <button type="button" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}