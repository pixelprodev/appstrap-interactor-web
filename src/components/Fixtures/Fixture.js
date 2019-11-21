import React, { useContext } from 'react'
import styled from '@emotion/styled'
import InteractorContext from '../../context'

const Container = styled.div(({  }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0',
  cursor: 'pointer'
}))

export default function Fixture ({ active, name }) {
  const { toggleFixture } = useContext(InteractorContext)
  return (
    <Container
      active={active}
      onClick={() => toggleFixture({name, current: active})}
    >
      {name}
    </Container>
  )
}