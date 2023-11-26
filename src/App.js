import './utils'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import {InteractorContextProvider} from './context'
import Header from './components/Header'
import Endpoints from './components/Endpoints'
import Fixtures from './components/Fixtures'
import ToggleStyles from './styles/toggle'
import Nav from './components/Nav'

const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1400,
  padding: '0 10px',
  margin: '0 auto',
  height: 'calc(100vh) - 190px'
})

export default function App () {
  const [activeTab, setActiveTab] = useState('endpoints')
  return (
    <InteractorContextProvider>
      <ToggleStyles />
      <Header />
      <Nav activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Content>
        {activeTab === 'endpoints' ? <Endpoints /> : <Fixtures />}
      </Content>
    </InteractorContextProvider>
  )
}