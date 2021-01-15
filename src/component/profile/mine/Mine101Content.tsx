import { Mine101ContentProps } from "../../../props/props";

export const Mine101Content = (props: Mine101ContentProps) => {
    return ( 
        <div>
            <style>
                {`
                    .content {
                        padding: 20px;
                        margin: 10px;
                        box-shadow: 3px 3px #FF69B4;
                        border-radius: 2px;
                        width: 200px;
                    }
                    .content p {
                        font-size: 1.2rem;
                    }
                `}
            </style>
            <div className="content">
                    <p>{`${props.id}: ${props.title}`}</p>
            </div>
            
        </div>
    )

}