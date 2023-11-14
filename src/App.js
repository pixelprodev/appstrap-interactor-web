import './utils'
import React from 'react'
import styled from '@emotion/styled'
import {InteractorContextProvider} from './context'
import Header from './components/Header'
import Endpoints from './components/Endpoints'
import Fixtures from './components/Fixtures'
import IntrospectModalProvider from './components/IntrospectModal/IntrospectModalContext'
import Modal from 'react-modal'
import ToggleStyles from './styles/toggle'

Modal.setAppElement('#root')

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1400,
  padding: '0 10px',
  margin: '0 auto',
  height: 'calc(100vh) - 160px'
})

export default function App () {
  return (
    <InteractorContextProvider>
      <IntrospectModalProvider>
        <ToggleStyles />
        <Header />
        <Content>
          <Endpoints />
          <Fixtures />
        </Content>
      </IntrospectModalProvider>
    </InteractorContextProvider>
  )
}