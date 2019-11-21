import './utils'
import React from 'react'
import Header from './components/Header'
import styled from '@emotion/styled'
import Routes from './components/Routes'
import Fixtures from './components/Fixtures'
import {InteractorContextProvider} from './context'

const Content = styled.div({
  display: 'flex',
  height: '100vh',
  justifyContent: 'space-between',
  ' h2': {
    fontSize: 24,
    fontWeight: 300
  }
})

export default function App () {
  return (
    <InteractorContextProvider>
      <Header />
      <Content>
        <Routes />
        <Fixtures />
      </Content>
    </InteractorContextProvider>
  )
}