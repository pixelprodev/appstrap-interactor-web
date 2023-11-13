import React, { useContext, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { TextInput } from '../../styles/SharedStyles'
import InteractorContext from '../../context'
import Fixture from './Fixture'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 30
})
const Header = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 36,
  marginBottom: 30,
  ' span': {
    fontSize: 16,
    fontWeight: 600
  },
  ' input': {
    width: 250,
    maxWidth: '60%',
    marginRight: 10
  }
})

export default function InactiveFixtures () {
  const { status } = useContext(InteractorContext)
  const [ inactiveFilter, setInactiveFilter ] = useState('')
  const [ filteredInactives, setFilteredInactives ] = useState(status.fixtures.filter(f => !f.active ))

  // useEffect(() => {
  //   const inactives = status.fixtures.filter(f => !f.active)
  //   const filterExp = new RegExp(RegExp.escape(inactiveFilter), 'i')
  //   setFilteredInactives(inactives.filter(f => filterExp.test(f.name)))
  // }, [status.fixtures, inactiveFilter])

  return (
    <Container>
      <Header>
        <span>Inactive</span>
        <TextInput placeholder={'filter inactive'} onChange={(e) => setInactiveFilter(e.target.value)}/>
      </Header>
      { filteredInactives.map(fixtureData => <Fixture key={fixtureData.name} {...fixtureData} />) }
    </Container>
  )
}