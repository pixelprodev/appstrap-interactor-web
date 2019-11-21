import React from 'react'
import ModifierHeader from './ModifierHeader'
import styled from '@emotion/styled'
import Route from './Route'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 15
})
const Path = styled.div({
  fontSize: 16,
  fontWeight: 600,
  padding: '15px 30px',
  borderBottom: '1px solid #DFE2E5'
})
export default function RouteGroup ({ path, routes }) {
  return (
    <Container>
      <Path>{path}</Path>
      <ModifierHeader />
      { routes.map(r => <Route key={r.id} {...r} />) }
    </Container>
  )
}