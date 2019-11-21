import React, {useContext} from 'react'
import styled from '@emotion/styled'
import InteractorContext from '../../context'

const Button = styled.button(({active, activeColor}) => ({
  width: 100,
  height: 30,
  borderRadius: 5,
  border: '1px solid #CCC',
  outline: 'none',
  background: active ? activeColor : '#DFE3E9',
  color: active ? 'white' : '#425161',
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
}))

export default function ButtonToggle ({ routeKey, property, active, activeColor }) {
  const { setModifier } = useContext(InteractorContext)
  function toggleProperty () {
    setModifier({ routeKey, property, value: !active })
  }
  return (
    <Button
      active={active}
      activeColor={activeColor}
      onClick={() => setModifier({ routeKey, property, value: !active })}
    >
      {active ? 'Active' : 'Inactive'}
    </Button>
  )
}
