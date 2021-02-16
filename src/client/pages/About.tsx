import * as React from 'react';

export const About = () => {
    const [count, setCount] = React.useState(0)

    const onClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button type="button" onClick={onClick}>押すと1増えるボタン</button>
        </div>
    )
}