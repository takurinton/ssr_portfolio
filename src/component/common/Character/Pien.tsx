export const Pien = () => {
    return (
        <div>
            <style>{`
            .pien-face-top{
                margin: 0 auto;
                right: 0; 
                left: 0;
                top: 100px;
                width: 300px;
                height: 300px;
                background: rgb(255, 234, 0);
                border-radius: 50%;
                position: relative;
                border-radius: 50%;
            }
            .pien-eye{
                display: flex;
                height: 100px;
                width: 100%;
            }
            .pien-eyebrow{
                display: flex;
                height: 100px;
                width: 100%;
            }
            .pien-eyebrow-left{
                margin-top: 40px;
                margin-left: 50px;
                height: 50px;
                width: 50px;
                border-bottom-right-radius: 200px;
                border: solid black 10px;
                border-top: unset;
                border-left: unset;
            }
            .pien-eyebrow-right{
                margin-top: 40px;
                margin-left: 85px;
                height: 50px;
                width: 50px;
                border-bottom-left-radius: 200px;
                border: solid black 10px;
                border-top: unset;
                border-right: unset;
            }
            
            
            .pien-eye-left{
                margin-top: 10px;
                margin-left: 40px;
                width: 100px;
                height: 100px;
                background: black;
                border-radius: 50%;
                display: block;
            }
            .pien-eye-right{
                margin-top: 10px;
                margin-left: 20px;
                width: 100px;
                height: 100px;
                background: black;
                border-radius: 50%;
                display: block;
            }
            .pien-eye-left-after{
                margin-left: 40px;
                height: 100px;
                width: 100px;
                border-bottom: solid 10px;
                display: none;
            }
            .pien-eye-right-after{
                margin-left: 20px;
                height: 100px;
                width: 100px;
                border-bottom: solid 10px;
                display: none;
            }
            .pien-eye-in{
                margin-top: 20px;
                margin-left: 20px;
                width: 50px;
                height: 50px;
                background: white;
                border-radius: 50%;
                animation: eye 1s;
                animation-iteration-count: infinite;
            }
            @keyframes eye {
                0% { transform: translate(2px, 2px) rotate(0deg); }
                10% { transform: translate(-2px, -3px) rotate(-2deg); }
                20% { transform: translate(-4px, 0px) rotate(2deg); }
                30% { transform: translate(4px, 3px) rotate(0deg); }
                40% { transform: translate(2px, -2px) rotate(2deg); }
                50% { transform: translate(-2px, 4px) rotate(-2deg); }
                60% { transform: translate(-4px, 2px) rotate(0deg); }
                70% { transform: translate(4px, 2px) rotate(-2deg); }
                80% { transform: translate(-2px, -2px) rotate(2deg); }
                90% { transform: translate(2px, 3px) rotate(0deg); }
                100% { transform: translate(2px, -3px) rotate(-2deg); }
            }
            .mouth{
                display: block;
            }
            .pien-mouth{
                margin-top: 20px;
                margin-left: 105px;
                height: 40px;
                width: 80px;
                border-top-left-radius: 1000px 1000px;
                border-top-right-radius: 1000px 1000px;
                border: solid black 10px;
                border-bottom: unset;
                animation: mouth .5s;
                animation-iteration-count: infinite;
            }
            .pien-mouth-after{
                margin-top: 20px;
                margin-left: 105px;
                height: 40px;
                width: 80px;
                border-top-left-radius: 1000px 1000px;
                border-top-right-radius: 1000px 1000px;
                border: solid black 10px;
                background: red;
                animation: mouth .5s;
                animation-iteration-count: infinite;
                display: none;
            }
            
            @keyframes mouth {
                0% { transform: translate(0px, 2px) }
                10% { transform: translate(0px, -2px) }
                20% { transform: translate(0px, 2px) }
                30% { transform: translate(0px, -2px) }
                40% { transform: translate(0px, 2px) }
                50% { transform: translate(0px, -2px) }
                60% { transform: translate(0px, 2px) }
                70% { transform: translate(0px, -2px) }
                80% { transform: translate(0px, 2px) }
                90% { transform: translate(0px, -2px) }
                100% { transform: translate(0px, 2px) }
            }
            
            
            .pien-left-pien{
                margin-left: 50px;
                margin-top: 30px;
                height: 50px;
                width: 50px;
                border-top: 10px solid rgb(0, 0, 0);
                border-right: 10px solid rgb(0, 0, 0);
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                display: none;
            }
            .pien-right-pien{
                margin-top: 30px;
                margin-left: 80px;
                height: 50px;
                width: 50px;
                border-top: 10px solid rgb(0, 0, 0);
                border-right: 10px solid rgb(0, 0, 0);
                -webkit-transform: rotate(225deg);
                transform: rotate(225deg);
                display: none;
            }
            
            
            
            @media screen and (max-width: 1024px){
            }
            
            @media screen and (max-width: 800px){
            
            .pien-face-top{
            top: 20vh;
            margin: auto auto 0%;
            margin-left: 50%;
            width: 300px;
            height: 300px;
            background: rgb(255, 234, 0);
            border-radius: 50%;
            position: relative;
            }
            .pien-eye{
            display: flex;
            height: 90px;
            width: 100%;
            }
            .pien-eyebrow{
            display: flex;
            height: 90px;
            width: 100%;
            }
            .pien-eyebrow-left{
            margin-top: 18px;
            margin-left: 45px;
            height: 60px;
            width: 60px;
            border-bottom-right-radius: 200px;
            border: solid black 10px;
            border-top: unset;
            border-left: unset;
            }
            .pien-eyebrow-right{
            margin-top: 18px;
            margin-left: 69px;
            height: 60px;
            width: 60px;
            border-bottom-left-radius: 200px;
            border: solid black 10px;
            border-top: unset;
            border-right: unset;
            }
            
            
            .pien-eye-left{
            margin-left: 48px;
            width: 90px;
            height: 100%;
            background: black;
            border-radius: 50%;
            display: block;
            }
            .pien-eye-right{
            margin-left: 24px;
            width: 90px;
            height: 100%;
            background: black;
            border-radius: 50%;
            display: block;
            }
            .pien-eye-left-after{
            margin-top: 16px;
            margin-left: 42px;
            height: 60px;
            width: 90px;
            border-bottom: solid 10px;
            display: none;
            }
            .pien-eye-right-after{
            margin-top: 18px;
            margin-left: 36px;
            height: 60px;
            width: 90px;
            border-bottom: solid 10px;
            display: none;
            }
            .pien-eye-in{
            margin-top: 12px;
            margin-left: 12px;
            width: 48px;
            height: 48px;
            background: white;
            border-radius: 50%;
            animation: eye 1s;
            animation-iteration-count: infinite;
            }
            .pien-mouth{
            margin-top: 24px;
            margin-left: 102px;
            height: 48px;
            width: 84px;
            border-top-left-radius: 1000px 1000px;
            border-top-right-radius: 1000px 1000px;
            border: solid black 10px;
            border-bottom: unset;
            }
            
            .pien-mouth-after{
            margin-top: 24px;
            margin-left: 102px;
            height: 48px;
            width: 84px;
            border-top-left-radius: 1000px 1000px;
            border-top-right-radius: 1000px 1000px;
            border: solid black 10px;
            background: red;
            animation: mouth .5s;
            animation-iteration-count: infinite;
            display: none;
            }
            
            @keyframes mouth {
            0% { transform: translate(0px, 2px) }
            10% { transform: translate(0px, -2px) }
            20% { transform: translate(0px, 2px) }
            30% { transform: translate(0px, -2px) }
            40% { transform: translate(0px, 2px) }
            50% { transform: translate(0px, -2px) }
            60% { transform: translate(0px, 2px) }
            70% { transform: translate(0px, -2px) }
            80% { transform: translate(0px, 2px) }
            90% { transform: translate(0px, -2px) }
            100% { transform: translate(0px, 2px) }
            }
            .pien-left-pien{
            margin-left: 40px;
            margin-top: 6%;
            height: 66%;
            width: 60px;
            border-top: 10px solid rgb(0, 0, 0);
            border-right: 10px solid rgb(0, 0, 0);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            display: none;
            }
            .pien-right-pien{
            margin-top: 6%;
            margin-left: 80px;
            height: 66%;
            width: 60px;
            border-top: 10px solid rgb(0, 0, 0);
            border-right: 10px solid rgb(0, 0, 0);
            -webkit-transform: rotate(225deg);
            transform: rotate(225deg);
            display: none;
            }
            }
            `}</style>

            <section>
                <div className="top">
                        <div className="pien-face-top">
                        <div className="pien-eyebrow">
                            <div className="pien-eyebrow-left"></div>
                            <div className="pien-eyebrow-right"></div>
                        </div>
                        <div className="pien-eye">
                            <div className="pien-left-pien"></div>
                            <div className="pien-eye-left-after"></div>
                            <div className="pien-eye-left">
                                <div className="pien-eye-in"></div>
                            </div>
                            <div className="pien-right-pien"></div>
                            <div className="pien-eye-right-after"></div>
                            <div className="pien-eye-right">
                                <div className="pien-eye-in"></div>
                            </div>
                        </div>
                        <div className="mouth has-mouth">
                            <div className="pien-mouth"></div>
                            <div className="pien-mouth-after"></div>
                        </div>
                        </div>
                </div>
            </section>

        </div>


    )
}