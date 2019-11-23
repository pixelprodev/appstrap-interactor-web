import React, { useContext } from 'react'
import InteractorContext from '../../context'
import styled from '@emotion/styled'
import Fixture from './Fixture'

const Container = styled.div({
  minHeight: 150,
  marginLeft: 30,
  marginBottom: 50
})
const Header = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 36,
  fontSize: 16,
  fontWeight: 600,
  marginBottom: 30,
  ' input': {
    width: 250
  }
})
const NoFixtures = styled.span({
  color: '#888'
})

export default function ActiveFixtures () {
  const { status } = useContext(InteractorContext)
  const activeFixtures = status.fixtures.filter(f => f.active).sort((a, b) => a.order - b.order)
  return (
    <Container>
      <Header>
        Active
      </Header>
      { activeFixtures.length > 0 && activeFixtures.map(fixtureData => <Fixture key={fixtureData.name} {...fixtureData} />) }
      { activeFixtures.length === 0 && <NoFixtures>No Active Fixtures</NoFixtures> }
    </Container>
  )
}
