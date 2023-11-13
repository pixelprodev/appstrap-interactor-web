import { createContext, useRef, useState } from 'react'
import Modal from 'react-modal'
import useIntrospectModal from './useIntrospectModal'
import { css, Global } from '@emotion/react'
import Highlight from 'react-highlight'

export const IntrospectModalContext = createContext({})

export default function IntrospectModalProvider ({ children }) {
  const [content, setContent] = useState({heading: '', action: ''})
  const { setShow, show, onHide } = useIntrospectModal()
  const resolver = useRef()

  function handleShow (content) {
    setShow(true)
    setContent(content)
    return new Promise(function (resolve) {
      resolver.current = resolve
    })
  }

  function handleCancel () {
    resolver.current && resolver.current(false)
    setContent({heading: '', action: ''})
    onHide()
  }
  
  return (
    <IntrospectModalContext.Provider value={ { activateIntrospect: handleShow } }>
      <Global
        styles={ css`
          .Overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            z-index: 100;
            background: rgba(0, 0, 0, 0.75);
            display: flex;
            justify-content: center;
          }

          .IntrospectModal {
            position: absolute;
            top: 250px;
            border-radius: 4px;
            background: #FFF;
            display: flex;
            flex-direction: column;
            padding: 20px;
            width: 50vw;
            max-height: 80vh;
            overflow-y: auto;
          }
          
          .IntrospectModal h1 {
            font-size: 24px;
            font-weight: 300;
            margin-bottom: 20px;
          }
          
          .IntrospectModal code {
            font-size: 22px;
          }
          .IntrospectModal code span {
            line-height: 30px;
          }
        ` }/>
      <Modal
        className="IntrospectModal"
        overlayClassName="Overlay"
        onRequestClose={ handleCancel }
        isOpen={ show }>
        <h1>{content.heading}</h1>
        <Highlight className='javascript'>
          { typeof content.action === 'string' ? content.action : JSON.stringify(content.action, null, 2) }
        </Highlight>
      </Modal>
      { children }
    </IntrospectModalContext.Provider>
  )
}
