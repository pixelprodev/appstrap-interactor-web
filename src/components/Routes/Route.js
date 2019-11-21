import React from 'react'
import styled from '@emotion/styled'
import ButtonToggle from './ButtonToggle'
import PropertyEntry from './PropertyEntry'

const Row = styled.div({
  padding: '5px 0'
})

const Method = styled.span(({ type }) => ({
  fontSize: 14,
  lineHeight: '30px',
  fontWeight: 600,
  textTransform: 'uppercase'
}))

const Modifiers = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 30px'
})
const Modifier = styled.div({
  display: 'flex',
  width: 110,
  flexDirection: 'column',
  alignItems: 'center'
})

export default function Route (props) {
  const modifiers = [
    <Method type={props.method}>{props.method}</Method>,
    <ButtonToggle routeKey={props.id} property={'error'} active={props.error} activeColor={'#F00'}/>,
    <PropertyEntry routeKey={props.id} property={'errorCode'} value={props.errorCode} />,
    <ButtonToggle routeKey={props.id} property={'latency'} active={props.latency} activeColor={'#A28D00'}/>,
    <PropertyEntry routeKey={props.id} property={'latencyMS'} value={props.latencyMS} />
  ]
  return (
    <Row>
      <Modifiers>
        { modifiers.map((modifier, i) => <Modifier key={i}>{modifier}</Modifier>) }
      </Modifiers>
    </Row>
  )
}
