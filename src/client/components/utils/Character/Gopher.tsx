export const Gopher = () => {
    return (
        <div>
            <style>{`
            #main {
                position: relative;
                margin: 0 auto 0;
                height: 280px;
                right: 0;
                left: 0;
                z-index: -1;
                background: #7fd5ea;
            }
            
            #body {
                margin: 0 auto 0;
                position: absolute;
                right: 0;
                left: 0;
                width: 350px;
                z-index: 1;
            }
            
            #eye-right, #eye-left {
                position: absolute;
                background: white;
                height: 120px;
                width: 120px;
                top: 20px;
                border-radius: 50%;
                border: .1px solid black;
            }
            #eye-right {
                left: 40px;
            }
            #eye-left {
                right: 40px;
            }
            #eye-black {
                position: absolute;
                background: black;
                height: 40px;
                width: 40px;
                border-radius: 50%;
                left: 5px;
                top: 40px;
            }
            #eye-white {
                position: absolute;
                background: white;
                height: 10px;
                width: 10px;
                border-radius: 50%;
                left: 20px;
                top: 20px;
            }
            
            #nose-top {
                position: absolute;
                margin: 0 auto 0;
                background: black;
                /* height: 70px;
                width: 110px;
                clip-path: ellipse(25% 23% at 50% 41%); */
                height: 40px;
                width: 60px;
                border-radius: 50%;
                top: 140px;
                right: 0;
                left: 0;
                z-index: 2;
            }
            #nose-bottom {
                position: absolute;
                margin: 0 auto 0;
                background: rgb(255, 215, 173);
                height: 60px;
                width: 100px;
                top: 155px;
                right: 0;
                left: 0;
                border-radius: 50%;
                z-index: 1;
            }
            
            #tooth-box {
                position: absolute;
                margin: 0 auto 0;
                width: 70px;
                height: 70px;
                top: 185px;
                right: 0;
                left: 0;
                z-index: 0;
                display: flex;
            }
            #tooth {
                height: 65px;
                width: 35px;
                background: white;
                border: .5px solid black;
                border-radius: 10px;
            }
            
            #ear-left, #ear-right {
                position: absolute;
                height: 90px;
                width: 90px;
                background: rgb(107, 213, 252);
                border-radius: 50%;
                top: 30px;
                z-index: 0;
                border: .1px solid black;
            }
            #ear-left {
                left: 90px;
            }
            #ear-right {
                right: 90px;
            }
            #ear-in {
                position: absolute;
                margin: 0 auto 0;
                height: 50px;
                width: 50px;
                border-radius: 50%;
                top: 20px;
                right: 0;
                left: 0;
                background: black;
            }
            
            
            #arm-left-base, #arm-right-base, #foot-left-base, #foot-right-base {
                position: absolute;
                height: 100px;
                width: 100px;
                clip-path: polygon(54% 0, 74% 61%, 74% 83%, 61% 100%, 49% 95%, 49% 94%, 45% 94%, 34% 99%, 25% 83%, 27% 62%);
                background: black;
                border-radius: 50%;
                z-index: 0;
            }
            #arm-left, #arm-right, #foot-left, #foot-right {
                position: absolute;
                height: 90px;
                width: 90px;
                clip-path: polygon(54% 0, 74% 61%, 74% 83%, 61% 100%, 49% 95%, 50% 67%, 46% 93%, 34% 99%, 25% 83%, 27% 62%);
                background: rgb(255, 215, 173);
                border-radius: 50%;
                z-index: 1;
            }
            
            #arm-left-base {
                top: 270px;
                left: 60px;;
                transform: rotate(45deg);
                z-index: 0;
            }
            #arm-left {
                top: 276px;
                left: 63px;
                transform: rotate(45deg);
            }
            
            #arm-right-base {
                top: 270px;
                right: 60px;
                transform: rotate(-45deg);
                z-index: 0;
            }
            #arm-right {
                top: 276px;
                right: 63px;
                transform: rotate(-45deg);
            }
            
            #foot-left-base {
                bottom: 20px;
                left: 70px;
                transform: rotate(45deg);
                z-index: 0;
            }
            #foot-left {
                bottom: 23px;
                left: 73px;
                transform: rotate(45deg);
            }
            
            #foot-right-base {
                z-index: 0;
                bottom: 20px;
                right: 70px;
                transform: rotate(-45deg);
                z-index: 0;
            }
            #foot-right {
                bottom: 23px;
                right: 73px;
                transform: rotate(-45deg);
            }

            @media (max-width: 800px) {
                #main {
                    margin-top: 30px;
                }
            }
            @media (max-width: 350px) {
                #body {
                    width: 300px;
                }
                #eye-left {
                    right: 15px;
                }
                #eye-right {
                    left: 15px;
                }
            }
            @media (max-width: 300px) {
                #body {
                    width: 270px;
                }
                #eye-left {
                    right: 7px;
                }
                #eye-right {
                    left: 7px;
                }
            }
            @media (max-width: 270px) {
                #body {
                    width: 240px;
                }
                #eye-left {
                    right: 1px;
                }
                #eye-right {
                    left: 1px;
                }
            }
            `}</style>

            <section id="main">

                <section id="body">
                    <section id="eye-left">
                        <div id="eye-black">
                            <div id="eye-white"></div>
                        </div>
                    </section>
                    <section id="eye-right">
                        <div id="eye-black">
                            <div id="eye-white"></div>
                        </div>
                    </section>

                    <section id="nose-top"></section>
                    <section id="nose-bottom"></section>

                    <section id="tooth-box">
                        <div id="tooth"></div>
                        <div id="tooth"></div>
                    </section>
                </section>
            </section>
        </div>
    )
}