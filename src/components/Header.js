import React from 'react'
import styled from '@emotion/styled'
import AppstrapLogo from './svg/AppstrapLogo'

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '0 30px',
  maxWidth: 1400,
  margin: '0 auto 20px auto',
  height: 120,
  width: '100%',
  flexShrink: 0,
  ' svg': {
    height: 45,
    width: 'auto'
  }
})

const Title = styled.div({
  fontWeight: 300,
  display: 'flex',
  alignItems: 'center',
  ' span' : {
    fontSize: 26
  },
  ' > strong': {
    fontSize: 26,
    display: 'inline-block',
    margin: '0 0 0 15px'
  }
})

const HorizontalDivider = styled.div({
  borderRight: '1px solid #DFE2E5',
  height: 50,
  display: 'inline-block',
  margin: '0 10px',
  width: 1
})

export default function Header () {
  return (
    <Container>
      <AppstrapLogo />
      <Title>
        <strong>Appstrap</strong> 
        <HorizontalDivider />
        <span>Interactor</span>
      </Title>
    </Container>
  )
}
