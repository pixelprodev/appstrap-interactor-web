import React from 'react'
import {TextInput} from '../../styles/SharedStyles'
import styled from '@emotion/styled'

const Container = styled.div({
  width: 300,
  maxWidth: '60%',
  height: 36
})

export default function RouteFilter ({ routeFilter, setRouteFilter }) {
  return (
    <Container>
      <TextInput placeholder={'filter routes'} value={routeFilter} onChange={(e) => setRouteFilter(e.target.value)}/>
    </Container>
  )
}
