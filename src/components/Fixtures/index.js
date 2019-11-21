import React from 'react'
import styled from '@emotion/styled'
import {SectionHeader} from '../../styles/SharedStyles'
import InactiveFixtures from './InactiveFixtures'
import ActiveFixtures from './ActiveFixtures'

const Container = styled.div({
  width: '40%'
})

export default function Fixtures () {
  return (
    <Container>
      <SectionHeader>
        <h2>Fixtures</h2>
      </SectionHeader>
      <ActiveFixtures />
      <InactiveFixtures />
    </Container>
  )
}
