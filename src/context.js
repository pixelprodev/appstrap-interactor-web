import React, { createContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'

const InteractorContext = createContext({})

export function InteractorContextProvider ({ children }) {
  const [initialized, setInitialized] = useState(false)
  const [fixtures, setFixtures] = useState([])
  const [endpoints, setEndpoints] = useState([])
  const [state, setState] = useState({})

  useEffect(() => {
    getStatus()
    window.onfocus = () => getStatus()
    return () => window.onfocus = null
  }, [])

  async function getStatus () {
    const response = await fetch('/__interactor/getStatus')
    const { fixtures, endpoints, state } = await response.json()
    setFixtures(fixtures)
    setEndpoints(endpoints)
    setState(state)
    if (!initialized) { setInitialized(true) }
  }
  
  async function setModifier (modifier) {
    const endpoint = typeof modifier.enabled !== 'undefined' ? 'setEndpointEnabled' : 'setModifier'
    if (typeof modifier.method === 'undefined') { delete modifier.method }
    await fetch(`/__interactor/${endpoint}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(modifier)
    })
    await getStatus()
  }

  async function toggleFixture (name) {
    const current = fixtures.find(f => f.name === name).active
    const endpoint = !current ? '/__interactor/activateFixture' : '/__interactor/deactivateFixture'
    await fetch(endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name })
    })
    await getStatus()
  }

  return (
    <InteractorContext.Provider value={{ endpoints, fixtures, state, getStatus, toggleFixture, setModifier }}>
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
