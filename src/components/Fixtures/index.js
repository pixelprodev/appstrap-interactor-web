import React from 'react'
import styled from '@emotion/styled'
import {SectionHeader} from '../../styles/SharedStyles'

const Container = styled.div({
  width: '40%'
})

export default function Fixtures () {
  return (
    <Container>
      <SectionHeader>
        <h2>Fixtures</h2>
      </SectionHeader>
    </Container>
  )
}
