import React, { createContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'

const InteractorContext = createContext({})

export function InteractorContextProvider ({ children }) {
  const [initialized, setInitialized] = useState(false)
  const [ config, setConfig ] = useState({})

  useEffect(() => {
    getConfig()
    window.onfocus = () => getConfig()
    return () => window.onfocus = null
  }, [])

  async function getConfig () {
    const response = await fetch('/__interactor/getConfig')
    setConfig(await response.json())
    if (!initialized) { setInitialized(true) }
  }
  
  async function setModifier (modifier) {
    await fetch(`/__interactor/setModifier`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(modifier)
    })
    await getConfig()
  }

  async function toggleFixture (name) {
    const currentlyActive = config.fixtures.active.find(f => f.key === name)
    const endpoint = !currentlyActive ? '/__interactor/activateFixture' : '/__interactor/deactivateFixture'
    await fetch(endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name })
    })
    await getConfig()
  }

  return (
    <InteractorContext.Provider value={{ config, getConfig, toggleFixture, setModifier }}>
      {initialized ? children : <Initializing />}
    </InteractorContext.Provider>
  )
}

function Initializing () {
  const Container = styled.div({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    ' h1': {
      fontSize: 24,
      fontWeight: 100,
      margin: '300px 0 50px 0'
    }
  })
  return (
    <Container>
      <h1>Connecting to Appstrap.  Please wait.</h1>
      <progress />
    </Container>
  )
}

export default InteractorContext
