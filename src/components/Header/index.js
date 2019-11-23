import React from 'react'
import styled from '@emotion/styled'
import AppstrapLogo from '../svg/AppstrapLogo'

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '0 30px',
  height: 70,
  width: '100%',
  flexShrink: 0,
  marginTop: 30,
  borderBottom: '1px solid #DFE2E5'
})

const Title = styled.span({
  fontSize: 26,
  fontWeight: 300,
  ' > strong': {
    fontSize: 'inherit',
    display: 'inline-block',
    margin: '0 0 0 15px'
  }
})

export default function Header () {
  return (
    <Container>
      <AppstrapLogo />
      <Title>
        <strong>Appstrap</strong> Interactor
      </Title>
    </Container>
  )
}
