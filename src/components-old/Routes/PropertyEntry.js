import React, { useContext } from 'react'
import {TextInput} from '../../styles/SharedStyles'
import styled from '@emotion/styled'
import InteractorContext from '../../context'

const Container = styled.div({
  height: 30,
  '@media screen and (min-width: 1000px)': {
    width: 100
  },
  '@media screen and (max-width: 1000px)': {
    width: 'auto'
  },
  ' input': {
    textAlign: 'center'
  }
})

export default function PropertyEntry ({ routeKey, property, value }) {
  const { setModifier } = useContext(InteractorContext)
  return (
    <Container>
      <TextInput onChange={(e) => setModifier({routeKey, property, value: e.target.value})} value={value} />
    </Container>
  )
}
