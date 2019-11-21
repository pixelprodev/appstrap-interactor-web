import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  height: 30,
  padding: '0 30px',
  justifyContent: 'space-between'
})
const Header = styled.div({
  width: 110,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: 12
})

export default function ModifierHeader () {
  const headers = [ 'Method', 'Error', 'Error Code', 'Latency', 'Latency MS']
  return (
    <Container>
      { headers.map(header => <Header key={header}>{header}</Header>) }
    </Container>
  )
}