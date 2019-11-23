import React, { useContext, useState } from 'react'
import styled from '@emotion/styled'
import InteractorContext from '../../context'

const Container = styled.div(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0',
  cursor: 'pointer',
  color: active ? '#44C164' : '#7F8FA4',
  ' span': {
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'upperacse',
    color: '#BDBFC1',
    display: 'inline-block',
    marginLeft: 10
  }
}))

export default function Fixture ({ active, name }) {
  const { toggleFixture } = useContext(InteractorContext)
  const [hovered, setHovered] = useState(false)

  function handleMouseEnter () {
    setHovered(true)
  }
  function handleMouseLeave () {
    setHovered(false)
  }

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      active={active}
      onClick={() => toggleFixture({ name, current: active })}
    >
      {name}
      { hovered && <span>{`click to ${active ? 'deactivate' : 'activate'}`}</span> }
    </Container>
  )
}