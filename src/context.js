import React, { createContext, useState, useEffect } from 'react'

const InteractorContext = createContext({})

export function InteractorContextProvider ({ children }) {
  const [ status, setStatus ] = useState({fixtures: [], routes: [], state: {}})

  useEffect(() => {
    getStatus()
    window.onfocus = () => getStatus()
    return () => window.onfocus = null
  }, [])

  async function getStatus () {
    const response = await fetch('/__interactor/getStatus')
    setStatus(await response.json())
  }

  async function setModifier ({ routeKey, property, value }) {
    const [path, method] = routeKey.split(':::')
    const payload = { [property]: value, path, method }
    await fetch('/__interactor/setModifier', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    await getStatus()
  }

  async function toggleFixture ({ name, current }) {
    const endpoint = !current ? '/__interactor/activateFixture' : '/__interactor/deactivateFixture'
    await fetch(endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ name })
    })
    await getStatus()
  }

  return (
    <InteractorContext.Provider value={{ status, getStatus, setModifier, toggleFixture }}>
      { children }
    </InteractorContext.Provider>
  )
}

export default InteractorContext
