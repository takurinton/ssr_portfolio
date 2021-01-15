import { useEffect } from 'react'
import { useState } from 'react'
import { useContact } from '../../hooks/useContact'
import { ContactForm } from '../../component/contact/ContactForm'
import Modal from 'react-modal'

const css = require('../../styles/style/contact.scss')

const Contact = () => {
    const [modal, setModal] = useState<boolean>(false)
    const {
        handleChange, 
        handleSubmit, 
        state
    } = useContact()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSubmit(state)
        setModal(true)
    }

    return (
        <div className={css.main}>
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
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition-duration: 500ms;
                    transition-timing-function: ease-in-out;
                    border-radius: 20px;
                  }
                  
                  .content-after {
                    width: 70%;
                    height: 40%;
                    opacity: .7;
                    background-color: #7fd5ea;
                  }
                  
                  .content-before {
                    background-color: transparent;
                  }
                `}
            </style>

            <ContactForm state={state} onChange={onChange} onSubmit={onSubmit} />
            {/* @ts-ignore */}
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
                <h1>お問い合わせありがとうございます。通常3日以内にこちらからご連絡いたします。</h1>
            </Modal>
        </div>
    )
}

export default Contact