import React from 'react'

type Props = {
    close: (e: any) => void
    children: React.ReactNode
}

export const Modal: React.FC<Props> = (props:Props) => {
    return (
      <div onClick={props.close}>
        <div>
          {React.cloneElement(props.children as any, {
            close: props.close
          })}
        </div>
        <button type="button" onClick={props.close}>Cancel</button>
      </div>
    );
}
