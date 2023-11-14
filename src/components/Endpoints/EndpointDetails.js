import styled from '@emotion/styled'
import HandlerIntrospect from './HandlerIntrospect'
import React, { useContext } from 'react'
import InteractorContext from '../../context'

const Container = styled.div({
  position: 'relative',
  display: 'flex',
  minHeight: 400,
  height: '100%',
  flexDirection: 'column',
  flexGrow: 1,
  ' section': {
    display: 'flex',
    flexDirection: 'column',
    ' >div:last-of-type': {
      margin: '0 15px 70px 15px'
    }
  }
})

export default function EndpointDetails ({ selectedEndpointKey }) {
  const { endpoints } = useContext(InteractorContext)
  const [pathname, endpoint] = endpoints.find(([pathname]) => pathname === selectedEndpointKey)
  return (
    <Container>
      <h2>{ pathname }</h2>
      <section>
        { endpoint.modifiers.map(([name, modifiers]) =>
          <HandlerIntrospect
            endpointKey={typeof endpoint.operations === 'undefined' ? pathname : name}
            name={name}
            method={typeof endpoint.operations === 'undefined' ? name : undefined}
            {...modifiers}
          />)
        }
      </section>
    </Container>
  )
}
