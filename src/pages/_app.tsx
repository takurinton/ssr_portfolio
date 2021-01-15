import { useEffect, useState } from "react";
import { Container } from "next/app";
import { useRouter } from 'next/router';
// import { Layout } from '../component/common/layout/Layout'
import { Header } from '../component/common/parts/Header'
import { Error } from '../function/error/err'
import { HtmlHead } from '../component/common/Head'

import hotkeys from 'hotkeys-js'
import Modal from 'react-modal'

// @ts-ignore
import '../styles/base.scss'

// const pages = ['/', 'dairyreport', 'baka', 'kawaii', 'wiki']

const App = ({ Component, pageProps }) => {
  const [modal, setModal] = useState<boolean>(false)
  const router = useRouter()
  if (process.browser) {
    hotkeys('shift+t', e => {
      e.preventDefault() 
      router.replace('/')
    })
    hotkeys('shift+k', e => {
        e.preventDefault() 
        router.replace('/kawaii')
    })
    hotkeys('shift+m', e => {
      e.preventDefault() 
      router.replace('/me')
    })
    hotkeys('shift+s', e => {
      e.preventDefault() 
      router.replace('/sake')
    })
    hotkeys('shift+d', e => {
      e.preventDefault() 
      router.replace('/dairyreport')
    })
    hotkeys('shift+c', e => {
      e.preventDefault() 
      router.replace('/contact')
    })
    hotkeys('h', e => {
      e.preventDefault() 
      setModal(true)
    })
  }

  useEffect(() => {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }, []);
    
    const component = pageProps.status >= 400 ?  <Error status={pageProps.status} /> : <Component {...pageProps} />

    return (
      <>
        <style>
          {`
          .modal-base {
              padding: 1rem;
              position: fixed;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              opacity: 0;
              transition-duration: 500ms;
              transition-timing-function: ease-in-out;
              outline: 0;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            
            .modal-after {
              background-color: rgba(0, 0, 0, 0.8);
              opacity: 1;
            }
            
            .modal-before {
              background-color: rgba(0, 0, 0, 0);
              opacity: 0;
            }
            
            .content-base {
              padding: 20px;
              position: relative;
              top: auto;
              left: auto;
              right: auto;
              bottom: auto;
              margin: 0 auto;
              border: 0;
              outline: 0;
              transition-duration: 500ms;
              transition-timing-function: ease-in-out;
              border-radius: 20px;
            }
            
            .content-after {
              text-align: center;
              width: 70%;
              height: 40%;
              opacity: .7;
              background-color: #7fd5ea;
            }
            
            .content-before {
              background-color: transparent;
            }

            .content-after h1 {
              font-size: 2rem
            }
          
            .content-box {
              margin: 10px auto 0;
              position: absolute;
              right: 0;
              left: 0;
              text-align: left; 
              font-size: 1.6rem;
              width: 300px;
            }
          `}
        </style>
        <Container>
        <HtmlHead 
            title={'たくりんとん'}
            description={'たくりんとんのポートフォリオです'}
            image={'https://www.takurinton.com/me.jpeg'}
            url={'https://www.takurinton.com'}
        />
        <style>{`* { margin: 0; padding: 0; }`}</style>
        <Header />
        {component}
        </Container> 
      
        <Modal 
            isOpen={modal} 
            onRequestClose={() => setModal(false)}
            overlayClassName={{
                base: "modal-base",
                afterOpen: "modal-after",
                beforeClose: "modal-before"
              }}
              className={{
                base: "content-base",
                afterOpen: "content-after",
                beforeClose: "content-before"
              }}
              closeTimeoutMS={500}
            >

            <h1>基本的にはページ遷移のショートカットです</h1>
            <div className="content-box">
              <p>- shift+t: トップへ行く</p>
              <p>- shift+k: 可愛いページへ</p>
              <p>- shift+s: お酒のページへ</p>
              <p>- shift+m: 僕についてのページへ</p>
              <p>- shift+d: 日報へ</p>
              <p>- shift+c: お問い合わせへ</p>
            </div>
            
        </Modal>
      </>
      );
}

export default App